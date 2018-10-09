// @flow

import functionCall from '../functionCall'

describe('functionCall generator', () => {
  it('generates correct code', () => {
    const fakeGenerator = (
      { name } // eslint-disable-line flowtype/require-parameter-type
    ): string => '[]'
    expect(
      functionCall(fakeGenerator)({
        name: 'functionCall',
        value: {
          left: {
            name: 'identifier',
            value: 'foo'
          },
          right: {
            name: 'list',
            value: []
          }
        }
      })
    ).toEqual('_.foo([])(input)')
  })
})
