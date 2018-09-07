import parser from '../input'

describe('. parser', () => {
  it('parses .', () => {
    expect(parser.parse('.').status).toBe(true)
  })
  it('returns correct value', () => {
    expect(parser.parse('.').value).toEqual({
      type: 'input',
      value: '.'
    })
  })
})
