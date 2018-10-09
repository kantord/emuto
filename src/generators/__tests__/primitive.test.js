import primitive from '../primitive'

describe('primitive generator', () => {
  it('null', () => {
    expect(primitive({ name: 'primitive', value: 'null' })).toEqual('null')
  })
  it('false', () => {
    expect(primitive({ name: 'primitive', value: 'false' })).toEqual('false')
  })
})
