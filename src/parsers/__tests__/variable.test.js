import parser from '../variable'

describe('variable parser', () => {
  it('parses $variable', () => {
    expect(parser.parse('$variable').status).toBe(true)
  })

  it('parses $', () => {
    expect(parser.parse('$').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('$foo').value).toMatchObject({
      name: 'variable',
      value: '$foo'
    })
  })

  it('returns correct value', () => {
    expect(parser.parse('$').value).toMatchObject({
      name: 'input',
      value: '$'
    })
  })
})
