// @flow

import projection from '../projection'

describe('projection generator', () => {
  it('.foo.bar', () => {
    const fakeGenerator = (
      { type } // eslint-disable-line flowtype/require-parameter-type
    ): string => (type === 'inputProp' ? 'input.foo' : '[4]')
    expect(
      projection(fakeGenerator)({
        type: 'projection',
        value: {
          left: {
            type: 'inputProp',
            value: '.foo'
          },
          right: {
            type: 'list',
            value: []
          }
        }
      })
    ).toEqual('_.projection(input.foo, [4])')
  })
})
