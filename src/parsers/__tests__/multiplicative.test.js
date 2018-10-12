import parser from '../multiplicative'

describe('multiplicative parser', () => {
  it('parses 42 / 22 * 12 / 3', () => {
    expect(parser.parse('42 / 22 * 12 / 3').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('$/$').value).toMatchObject({
      name: 'multiplicative',
      value: [
        {
          name: 'input',
          value: '$'
        },
        {
          name: 'operand',
          value: '/'
        },
        {
          name: 'input',
          value: '$'
        }
      ]
    })
  })

  it('returns correct value', () => {
    expect(parser.parse('$*$ / 4').value).toMatchObject({
      name: 'multiplicative',
      value: [
        {
          name: 'input',
          value: '$'
        },
        {
          name: 'operand',
          value: '*'
        },
        {
          name: 'input',
          value: '$'
        },
        {
          name: 'operand',
          value: '/'
        },
        {
          name: 'primitive',
          value: '4'
        }
      ]
    })
  })
})
