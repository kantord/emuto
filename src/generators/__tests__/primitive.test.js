import primitive from '../primitive'

describe('primitive generator', () => {
  it('null', () => {
    expect(primitive({ type: 'primitive', value: 'null' })).toEqual('null')
  })
  it('false', () => {
    expect(primitive({ type: 'primitive', value: 'false' })).toEqual('false')
  })
})
