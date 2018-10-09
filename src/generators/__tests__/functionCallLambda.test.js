// @flow

import functionCallLambda from '../functionCallLambda'

describe('functionCallLambda generator', () => {
  it('generates correct code', () => {
    const fakeGenerator = (
      { name } // eslint-disable-line flowtype/require-parameter-type
    ): string => 'input[0]'
    expect(
      functionCallLambda(fakeGenerator)({
        name: 'functionCallLambda',
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
    ).toEqual('(_.foo(function(input) {return input[0]})(input))')
  })
})
