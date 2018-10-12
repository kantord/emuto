import parser from '../multiplicative'

describe('multiplicative parser', () => {
  it('parses 42 / 22 * 12 / 3', () => {
    expect(parser.parse('42 / 22 * 12 / 3').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('$/$').value).toMatchObject({
      name: 'binaryOperation',
      value: [
        {
          name: 'input',
          value: '$'
        },
        {
          name: 'primitive',
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
      name: 'binaryOperation',
      value: [
        {
          name: 'input',
          value: '$'
        },
        {
          name: 'primitive',
          value: '*'
        },
        {
          name: 'input',
          value: '$'
        },
        {
          name: 'primitive',
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
