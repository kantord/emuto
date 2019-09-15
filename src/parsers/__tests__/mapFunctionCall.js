import parser from '../mapFunctionCall'

describe('functionCall parser', () => {
  it('doesnt parse ~', () => {
    expect(parser.parse('~').status).toBe(false)
  })
  it('parses ~ 4', () => {
    expect(parser.parse('~ 4').status).toBe(true)
  })

  it('parses ~ $ + 3.1', () => {
    expect(parser.parse('~ $ + 3.1').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('~ 4: "; "').value).toEqual({
      name: 'functionCall',
      value: {
        left: {
          name: 'identifier',
          value: 'map'
        },

        right: {
          name: 'lambda',
          value: {
            variable: 'input',
            definition: {
              name: 'tuple',
              value: [
                {
                  name: 'primitive',
                  value: '4'
                },
                {
                  name: 'primitive',
                  value: '"; "'
                }
              ]
            }
          }
        }
      }
    })
  })

  it('returns correct value', () => {
    expect(parser.parse('~ ", ": "; "').value).toEqual({
      name: 'functionCall',
      value: {
        left: {
          name: 'identifier',
          value: 'map'
        },

        right: {
          name: 'lambda',
          value: {
            variable: 'input',
            definition: {
              name: 'tuple',
              value: [
                {
                  name: 'primitive',
                  value: '", "'
                },
                {
                  name: 'primitive',
                  value: '"; "'
                }
              ]
            }
          }
        }
      }
    })
  })
})
