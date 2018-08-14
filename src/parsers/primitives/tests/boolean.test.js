import parser from '../boolean'

describe('boolean primitive parser', () => {
  it('parses true', () => {
    expect(parser.parse('true').status).toBe(true)
  })
  it('parses false', () => {
    expect(parser.parse('false').status).toBe(true)
  })
  it('returns correct value', () => {
    expect(parser.parse('false').value).toEqual({
      type: 'primitive',
      value: 'false'
    })
  })
})
