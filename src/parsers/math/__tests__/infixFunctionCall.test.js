import parser from '../infixFunctionCall'

describe('multiplicative parser', () => {
  it('parses {}', () => {
    expect(parser.parse('{}').status).toBe(true)
  })

  it('parses {} has "Foo"', () => {
    expect(parser.parse('({} has "Foo")').status).toBe(true)
  })

  it('parses 0 factorial', () => {
    expect(parser.parse('(0 factorial)').status).toBe(true)
  })

  it('correct value for 0 plus 1', () => {
    expect(parser.parse('(0 plus 1)').value).toEqual({
      name: 'parentheses',
      value: {
        name: 'pipe',
        value: {
          left: { name: 'primitive', value: '0' },
          right: {
            name: 'functionCall',
            value: {
              left: {
                name: 'identifier',
                value: 'plus'
              },
              right: {
                name: 'primitive',
                value: '1'
              }
            }
          }
        }
      }
    })
  })

  it('correct value for 3 factorial', () => {
    expect(parser.parse('(3 factorial)').value).toEqual({
      name: 'parentheses',
      value: {
        name: 'pipe',
        value: {
          left: { name: 'primitive', value: '3' },
          right: {
            name: 'functionCall',
            value: {
              left: {
                name: 'identifier',
                value: 'factorial'
              },
              right: null
            }
          }
        }
      }
    })
  })
})
