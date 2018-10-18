import parser from '../assignment'

describe('assignment parser', () => {
  it('parses where $variable = ("foo": "bar")', () => {
    expect(
      parser.parse('$variable where $variable = ("foo": "bar")').status
    ).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('44 where $a34234 = (5 + -4)').value).toMatchObject({
      name: 'assignment',
      value: {
        program: {
          name: 'primitive',
          value: '44'
        },
        value: {
          name: 'parentheses',
          value: {
            name: 'binaryOperation',
            value: [
              {
                name: 'primitive',
                value: '5'
              },
              {
                name: 'primitive',
                value: '+'
              },
              {
                name: 'primitive',
                value: '-4'
              }
            ]
          }
        },
        name: {
          name: 'identifier',
          value: 'a34234'
        }
      }
    })
  })
})
