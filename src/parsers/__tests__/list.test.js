import parser from '../list'

describe('list parser', () => {
  it('parses [null  , false]', () => {
    expect(parser.parse('[null  , false]').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('[$,$]').value).toEqual({
      type: 'list',
      value: [
        {
          type: 'input',
          value: '$'
        },
        {
          type: 'input',
          value: '$'
        }
      ]
    })
  })
  it('returns correct value', () => {
    expect(parser.parse('[$,$, null]').value).toEqual({
      type: 'list',
      value: [
        {
          type: 'input',
          value: '$'
        },
        {
          type: 'input',
          value: '$'
        },
        { type: 'primitive', value: 'null' }
      ]
    })
  })
})
