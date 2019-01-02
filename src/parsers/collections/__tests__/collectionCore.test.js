import parser from '../collectionCore'

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

describe('collectionCore parser', () => {
  it('parses null  , false', () => {
    expect(parser.parse('null  , false').status).toBe(true)
  })

  it('parses spread operatoor', () => {
    expect(parser.parse('null  , ...$').status).toBe(true)
    expect(parser.parse('...$').status).toBe(true)
    expect(parser.parse('...$, ...[1, 2, 3]').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('$,$,...$,$').value).toMatchObject({
      name: 'collectionCore',
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

  it('parses each .about.name in .user (comprehension)', () => {
    expect(parser.parse('each .about.name in .user').status).toBe(true)
  })

  it('parses each .about.name in .user if .user.age >= 3 (comprehension)', () => {
    expect(
      parser.parse('each .about.name in .user if .user.age >= 3').status
    ).toBe(true)
  })

  it('parses each $[0] in $ sortBy $ => $.size (comprehension)', () => {
    expect(parser.parse('each $[0] in $ sortBy $ => $.size').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('each 9 in 1 11').value).toMatchObject({
      name: 'collectionCore',
      value: [
        {
          name: 'spread',
          value: {
            name: 'parentheses',
            value: {
              name: 'pipe',
              value: [
                {
                  name: 'pipe',
                  value: [
                    { name: 'primitive', value: '1' },
                    {
                      name: 'pipe',
                      value: [
                        {
                          name: 'primitive',
                          value: '11'
                        }
                      ]
                    }
                  ]
                },
                {
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
                          name: 'primitive',
                          value: '9'
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    })
  })

  it('returns correct value', () => {
    expect(parser.parse('each 3 in 8').value).toMatchObject({
      name: 'collectionCore',
      value: [
        {
          name: 'spread',
          value: {
            name: 'parentheses',
            value: {
              name: 'pipe',
              value: [
                {
                  name: 'primitive',
                  value: '8'
                },
                {
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
                          name: 'primitive',
                          value: '3'
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    })
  })

  it('returns correct value', () => {
    expect(parser.parse('$,$').value).toMatchObject({
      name: 'collectionCore',
      value: [segment]
    })
  })
  it('returns correct value', () => {
    expect(parser.parse('$,$, null').value).toMatchObject({
      name: 'collectionCore',
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
      name: 'collectionCore',
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
