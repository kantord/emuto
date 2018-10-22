import parser from '../listCore'

describe('listCore parser', () => {
  it('parses null  , false', () => {
    expect(parser.parse('null  , false').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('$,$').value).toMatchObject({
      name: 'listCore',
      value: [
        [
          {
            name: 'variable',
            value: '$'
          },
          {
            name: 'variable',
            value: '$'
          }
        ]
      ]
    })
  })
  it('returns correct value', () => {
    expect(parser.parse('$,$, null').value).toMatchObject({
      name: 'listCore',
      value: [
        [
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
      ]
    })
  })
  it('returns correct value', () => {
    expect(parser.parse('true, [false, false]').value).toMatchObject({
      name: 'listCore',
      value: [
        [
          {
            name: 'primitive',
            value: 'true'
          },
          {
            name: 'list',
            value: [
              [
                {
                  name: 'primitive',
                  value: 'false'
                },
                {
                  name: 'primitive',
                  value: 'false'
                }
              ]
            ]
          }
        ]
      ]
    })
  })
})
