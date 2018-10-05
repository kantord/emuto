import parser from '../functionCallLambda'

describe('functionCallLambda parser', () => {
  it('parses map \\"foo"', () => {
    expect(parser.parse('map \\"foo"').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('map \\["a", "b"]').value).toEqual({
      type: 'functionCallLambda',
      value: {
        left: {
          type: 'identifier',
          value: 'map'
        },
        right: {
          type: 'list',
          value: [
            {
              type: 'primitive',
              value: '"a"'
            },
            {
              type: 'primitive',
              value: '"b"'
            }
          ]
        }
      }
    })
  })
})
