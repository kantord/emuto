import parser from '../projection'

describe('projection parser', () => {
  it('parses [5, 6, 7][5]', () => {
    expect(parser.parse('[5, 6, 7][5]').status).toBe(true)
  })

  it('parses {"foo": "bar"}["foo"]', () => {
    expect(parser.parse('{"foo": "bar"}["foo"]').status).toBe(true)
  })

  it('parses {"foo": "bar"}["foo"]', () => {
    expect(parser.parse('{"foo": "bar"}["foo", -3]').status).toBe(true)
  })

  it('parses [5, 6, 7]  [5]', () => {
    expect(parser.parse('[5, 6, 7]  [5:2, 4]').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('[3, 2][3]').value).toEqual({
      type: 'projection',
      value: {
        left: {
          type: 'list',
          value: [
            {
              type: 'primitive',
              value: '3'
            },
            {
              type: 'primitive',
              value: '2'
            }
          ]
        },
        right: {
          type: 'list',
          value: [
            {
              type: 'primitive',
              value: '3'
            }
          ]
        }
      }
    })
  })
})
