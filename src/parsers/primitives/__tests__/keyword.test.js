import parser from '../keyword'

describe('boolean primitive parser', () => {
  it('parses true', () => {
    expect(parser.parse('true').status).toBe(true)
  })
  it('parses false', () => {
    expect(parser.parse('false').status).toBe(true)
  })
  it('returns correct value', () => {
    expect(parser.parse('false').value).toEqual({
      name: 'primitive',
      value: 'false'
    })
  })
  it('parses null', () => {
    expect(parser.parse('null').status).toBe(true)
  })
  it('returns correct value', () => {
    expect(parser.parse('null').value).toEqual({
      name: 'primitive',
      value: 'null'
    })
  })
})
