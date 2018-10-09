import parser from '../list'

describe('list parser', () => {
  it('parses [null  , false]', () => {
    expect(parser.parse('[null  , false]').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('[$,$]').value).toEqual({
      name: 'list',
      value: [
        {
          name: 'input',
          value: '$'
        },
        {
          name: 'input',
          value: '$'
        }
      ]
    })
  })
  it('returns correct value', () => {
    expect(parser.parse('[$,$, null]').value).toEqual({
      name: 'list',
      value: [
        {
          name: 'input',
          value: '$'
        },
        {
          name: 'input',
          value: '$'
        },
        { name: 'primitive', value: 'null' }
      ]
    })
  })
})
