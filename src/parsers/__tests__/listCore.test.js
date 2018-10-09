import parser from '../listCore'

describe('listCore parser', () => {
  it('parses null  , false', () => {
    expect(parser.parse('null  , false').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('$,$').value).toEqual({
      name: 'listCore',
      value: [
        {
          name: 'input',
          value: '$'
        },
        {
          name: 'input',
          value: '$'
        }
      ]
    })
  })
  it('returns correct value', () => {
    expect(parser.parse('$,$, null').value).toEqual({
      name: 'listCore',
      value: [
        {
          name: 'input',
          value: '$'
        },
        {
          name: 'input',
          value: '$'
        },
        {
          name: 'primitive',
          value: 'null'
        }
      ]
    })
  })
  it('returns correct value', () => {
    expect(parser.parse('true, [false, false]').value).toEqual({
      name: 'listCore',
      value: [
        {
          name: 'primitive',
          value: 'true'
        },
        {
          name: 'list',
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
    })
  })
})
