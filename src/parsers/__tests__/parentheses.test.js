import parser from '../parentheses'

describe('parentheses parser', () => {
  it('parses ("foo" | "bar")', () => {
    expect(parser.parse('("foo" | "bar")').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('("Hello World")').value).toEqual({
      type: 'parentheses',
      value: {
        type: 'primitive',
        value: '"Hello World"'
      }
    })
  })
})
