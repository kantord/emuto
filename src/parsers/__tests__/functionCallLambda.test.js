import parser from '../functionCallLambda'

describe('functionCallLambda parser', () => {
  it('parses map \\"foo"', () => {
    expect(parser.parse('map \\"foo"').status).toBe(true)
  })
  it('parses map \\ "foo"', () => {
    expect(parser.parse('map \\ "foo"').status).toBe(true)
  })

  it('parses map $ => "foo"', () => {
    expect(parser.parse('map $ => "foo"').status).toBe(true)
  })

  it('parses map $ =>"foo"', () => {
    expect(parser.parse('map $ =>"foo"').status).toBe(true)
  })

  it('parses map $=>"foo"', () => {
    expect(parser.parse('map $=>"foo"').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('map \\["a", "b"]').value).toMatchObject({
      name: 'functionCallLambda',
      value: {
        left: {
          name: 'identifier',
          value: 'map'
        },
        right: {
          name: 'list',
          value: [
            {
              name: 'primitive',
              value: '"a"'
            },
            {
              name: 'primitive',
              value: '"b"'
            }
          ]
        }
      }
    })
  })
})
