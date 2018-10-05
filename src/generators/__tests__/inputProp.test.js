import inputProp from '../inputProp'

describe('inputProp generator', () => {
  it('.foo', () => {
    expect(inputProp({ type: 'inputProp', value: '.foo' })).toEqual('input.foo')
  })
})
