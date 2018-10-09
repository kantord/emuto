import parser from '../valueProp'

describe('valueProp parser', () => {
  it('parses .bar.foo', () => {
    expect(parser.parse('.bar.foo').status).toBe(true)
  })
  it('parses .false.true.boo', () => {
    expect(parser.parse('.false.true.boo').status).toBe(true)
  })
  it('returns correct value', () => {
    expect(parser.parse('.foo.bar').value).toEqual({
      name: 'valueProp',
      value: {
        left: {
          name: 'inputProp',
          value: '.foo'
        },
        right: '.bar'
      }
    })
  })
})
