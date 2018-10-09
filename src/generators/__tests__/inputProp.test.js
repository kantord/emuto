import inputProp from '../inputProp'

describe('inputProp generator', () => {
  it('.foo', () => {
    expect(inputProp({ name: 'inputProp', value: '.foo' })).toEqual('input.foo')
  })
})
