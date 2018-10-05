import parser from '../functionCall'

describe('functionCall parser', () => {
  it('parses join ", "', () => {
    expect(parser.parse('join ", "').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('replace ", ": "; "').value).toEqual({
      type: 'functionCall',
      value: {
        left: {
          type: 'identifier',
          value: 'replace'
        },
        right: {
          type: 'tuple',
          value: [
            {
              type: 'primitive',
              value: '", "'
            },
            {
              type: 'primitive',
              value: '"; "'
            }
          ]
        }
      }
    })
  })
})
