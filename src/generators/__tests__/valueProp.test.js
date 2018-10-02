// @flow

import valueProp from '../valueProp'

describe('valueProp generator', () => {
  it('.foo.bar', () => {
    const fakeGenerator = (): string => 'input.foo'
    expect(
      valueProp(fakeGenerator)({
        type: 'valueProp',
        value: {
          left: {
            type: 'inputProp',
            value: '.foo'
          },
          right: '.bar'
        }
      })
    ).toEqual('input.foo.bar')
  })
})
