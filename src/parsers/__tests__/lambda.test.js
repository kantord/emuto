import parser from '../lambda'

describe('lambda parser', () => {
  it('parses correct string - syntax 1', () => {
    expect(parser.parse(`$ => 3 + 4`).status).toBe(true)
    expect(parser.parse(`$ => 1`).status).toBe(true)
  })

  it('parses correct string - syntax 2', () => {
    expect(parser.parse(`\\3 + 4`).status).toBe(true)
    expect(parser.parse(`\\1`).status).toBe(true)
  })

  it('returns correct string', () => {
    expect(parser.parse('$ => 4').value).toMatchObject({
      name: 'lambda',
      value: {
        name: 'primitive',
        value: '4'
      }
    })
  })
})
