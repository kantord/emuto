import parser from '../functionCall'

describe('functionCall parser', () => {
  it('parses join ", "', () => {
    expect(parser.parse('join ", "').status).toBe(true)
  })

  it('parses replace', () => {
    expect(parser.parse('replace').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('replace ", ": "; "').value).toEqual({
      name: 'functionCall',
      value: {
        left: {
          name: 'identifier',
          value: 'replace'
        },
        right: {
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
    })
  })

  it('returns correct value', () => {
    expect(parser.parse('reverse').value).toEqual({
      name: 'functionCall',
      value: {
        left: {
          name: 'identifier',
          value: 'reverse'
        },
        right: null
      }
    })
  })
})
