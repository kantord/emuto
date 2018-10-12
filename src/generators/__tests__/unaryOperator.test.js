import unaryOperator from '../unaryOperator'

describe('unaryOperator generator', () => {
  it('generates correct code', () => {
    expect(
      unaryOperator({
        name: 'unaryOperator',
        value: {
          operator: {
            value: '-'
          },
          operand: {
            name: 'primitive',
            value: '4'
          }
        }
      })
    ).toEqual('(-(4))')
  })
})
