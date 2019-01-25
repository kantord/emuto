import binaryOperator from '../binaryOperator'

describe('binaryOperator generator', () => {
  it('generates correct code - single operation', () => {
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
          }
        ]
      })
    ).toEqual('_.__add__(input)(input)')
  })

  it('generates correct code - multiple operations', () => {
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
    ).toEqual('_.__add__(input)(_.__subtract__(input)(input))')
  })

  it('generates correct code - no operation', () => {
    expect(
      binaryOperator({
        name: 'additive',
        value: [
          {
            name: 'variable',
            value: '$'
          }
        ]
      })
    ).toEqual('input')
  })
})
