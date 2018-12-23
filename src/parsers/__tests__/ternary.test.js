import parser from '../ternary'

describe('ternary parser', () => {
  it('parses "Hello" + " World" if $hello >= 4 else null : false', () => {
    expect(
      parser.parse('"Hello" + " World" if $hello >= 4 else null : false')
        .status
    ).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('0 if 1 else 2').value).toMatchObject({
      name: 'ternary',
      value: {
        left: { name: 'primitive', value: '0' },
        middle: { name: 'primitive', value: '1' },
        right: { name: 'primitive', value: '2' }
      }
    })
  })

  it('handles tuple correctly', () => {
    expect(parser.parse('0').value).toMatchObject({
      name: 'primitive',
      value: '0'
    })
  })
})
