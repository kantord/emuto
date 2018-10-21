import binaryOperator from '../binaryOperator'

describe('binaryOperator generator', () => {
  it('generates correct code', () => {
    expect(
      binaryOperator({
        name: 'additive',
        value: [
          {
            name: 'variable',
            value: '$'
          },
          { name: 'primitive', value: '+' },
          {
            name: 'variable',
            value: '$'
          },
          { name: 'primitive', value: '-' },
          {
            name: 'variable',
            value: '$'
          }
        ]
      })
    ).toEqual('input+input-input')
  })
})
