import parser from '../null'

describe('null primitive parser', () => {
  it('parses null', () => {
    expect(parser.parse('null').status).toBe(true)
  })
  it('returns correct value', () => {
    expect(parser.parse('null').value).toEqual({
      type: 'primitive',
      value: 'null'
    })
  })
})
