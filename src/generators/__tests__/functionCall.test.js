// @flow

import functionCall from '../functionCall'

const fakeGenerator = (
  { name } // eslint-disable-line flowtype/require-parameter-type
): string => '[]'

describe('functionCall generator', () => {
  it('generates correct code', () => {
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

  it('generates correct code - no args', () => {
    expect(
      functionCall(fakeGenerator)({
        name: 'functionCall',
        value: {
          left: {
            name: 'identifier',
            value: 'foo'
          },
          right: null
        }
      })
    ).toEqual('_.foo(input)')
  })
})
