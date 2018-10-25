import parser from '../listCore'

const segment = {
  name: 'simpleList',
  value: [
    {
      name: 'variable',
      value: '$'
    },
    {
      name: 'variable',
      value: '$'
    }
  ]
}

describe('listCore parser', () => {
  it('parses null  , false', () => {
    expect(parser.parse('null  , false').status).toBe(true)
  })

  it('parses spread operator', () => {
    expect(parser.parse('null  , ...$').status).toBe(true)
    expect(parser.parse('...$').status).toBe(true)
    expect(parser.parse('...$, ...[1, 2, 3]').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('$,$,...$,$').value).toMatchObject({
      name: 'listCore',
      value: [
        segment,
        { name: 'spread', value: { name: 'variable', value: '$' } },
        {
          name: 'simpleList',
          value: [
            {
              name: 'variable',
              value: '$'
            }
          ]
        }
      ]
    })
  })

  it('returns correct value', () => {
    expect(parser.parse('$,$').value).toMatchObject({
      name: 'listCore',
      value: [segment]
    })
  })
  it('returns correct value', () => {
    expect(parser.parse('$,$, null').value).toMatchObject({
      name: 'listCore',
      value: [
        {
          name: 'simpleList',
          value: [
            {
              name: 'variable',
              value: '$'
            },
            {
              name: 'variable',
              value: '$'
            },
            {
              name: 'primitive',
              value: 'null'
            }
          ]
        }
      ]
    })
  })
  it('returns correct value', () => {
    expect(parser.parse('true, [false, false]').value).toMatchObject({
      name: 'listCore',
      value: [
        {
          name: 'simpleList',
          value: [
            {
              name: 'primitive',
              value: 'true'
            },
            {
              name: 'list',
              value: [
                {
                  name: 'simpleList',
                  value: [
                    {
                      name: 'primitive',
                      value: 'false'
                    },
                    {
                      name: 'primitive',
                      value: 'false'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })
  })
})
