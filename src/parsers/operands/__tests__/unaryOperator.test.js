import parser from '../unaryOperator'

describe('multiplicative parser', () => {
  it('parses "Hello"', () => {
    expect(parser.parse('"Hello"').status).toBe(false)
  })

  it('parses 5', () => {
    expect(parser.parse('5').status).toBe(false)
  })

  it('parses -5', () => {
    expect(parser.parse('-5').status).toBe(true)
  })

  it('parses -(5)', () => {
    expect(parser.parse('-(5)').status).toBe(true)
  })

  it('parses !false', () => {
    expect(parser.parse('!false').status).toBe(true)
  })

  it('parses !!true', () => {
    expect(parser.parse('!!true').status).toBe(true)
  })

  it('parses ! ! true', () => {
    expect(parser.parse('!!true').status).toBe(true)
  })
})
