// @flow

import functionCall from '../functionCall'

describe('functionCall generator', () => {
  it('generates correct code', () => {
    const fakeGenerator = (
      { type } // eslint-disable-line flowtype/require-parameter-type
    ): string => '[]'
    expect(
      functionCall(fakeGenerator)({
        type: 'functionCall',
        value: {
          left: {
            type: 'identifier',
            value: 'foo'
          },
          right: {
            type: 'list',
            value: []
          }
        }
      })
    ).toEqual('_.foo([])(input)')
  })
})
