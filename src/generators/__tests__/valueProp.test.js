// @flow

import valueProp from '../valueProp'

describe('valueProp generator', () => {
  it('.foo.bar', () => {
    const fakeGenerator = (): string => 'input.foo'
    expect(
      valueProp(fakeGenerator)({
        name: 'valueProp',
        value: {
          left: {
            name: 'inputProp',
            value: '.foo'
          },
          right: '.bar'
        }
      })
    ).toEqual('input.foo.bar')
  })
})
