// @flow

import projection from '../projection'

describe('projection generator', () => {
  it('.foo.bar', () => {
    const fakeGenerator = (
      { name } // eslint-disable-line flowtype/require-parameter-type
    ): string => (name === 'inputProp' ? 'input.foo' : '[4]')
    expect(
      projection(fakeGenerator)({
        name: 'projection',
        value: {
          left: {
            name: 'inputProp',
            value: '.foo'
          },
          right: {
            name: 'list',
            value: [[]]
          }
        }
      })
    ).toEqual('_.projection(input.foo, [4])')
  })
})
