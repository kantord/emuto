// @flow

import valueProp from '../valueProp'
import type { ValuePropNodeType } from '../../types'

const example = (optional: boolean): ValuePropNodeType => ({
  name: 'valueProp',
  value: {
    optional,
    left: {
      name: 'inputProp',
      value: '.foo'
    },
    right: '.bar'
  }
})

describe('valueProp generator', () => {
  it('.foo.bar', () => {
    const fakeGenerator = (): string => 'input.foo'
    expect(valueProp(fakeGenerator)(example(false))).toEqual('input.foo.bar')
  })
  it('.foo?.bar', () => {
    const fakeGenerator = (): string => 'input.foo'
    expect(valueProp(fakeGenerator)(example(true))).toEqual(
      '_.__opt__(input.foo, function(x) {return x.bar})'
    )
  })
})
