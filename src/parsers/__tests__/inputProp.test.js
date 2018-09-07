import parser from '../inputProp'

describe('. parser', () => {
  it('parses .bar', () => {
    expect(parser.parse('.bar').status).toBe(true)
  })
  it('returns correct value', () => {
    expect(parser.parse('.foo').value).toEqual({
      type: 'inputProp',
      value: '.foo'
    })
  })
  it('returns correct value 2', () => {
    expect(parser.parse('.bar4').value).toEqual({
      type: 'inputProp',
      value: '.bar4'
    })
  })
})
