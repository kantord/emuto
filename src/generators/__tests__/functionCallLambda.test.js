// @flow

import functionCallLambda from '../functionCallLambda'

describe('functionCallLambda generator', () => {
  it('generates correct code', () => {
    const fakeGenerator = (
      { type } // eslint-disable-line flowtype/require-parameter-type
    ): string => 'input[0]'
    expect(
      functionCallLambda(fakeGenerator)({
        type: 'functionCallLambda',
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
    ).toEqual('(_.foo(function(input) {return input[0]})(input))')
  })
})
