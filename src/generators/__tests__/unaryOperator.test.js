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
    ).toEqual('(_.__negateNumber__(4))')
  })

  it('generates correct code', () => {
    expect(
      unaryOperator({
        name: 'unaryOperator',
        value: {
          operator: {
            value: '+'
          },
          operand: {
            name: 'primitive',
            value: '4'
          }
        }
      })
    ).toEqual('(_.__id__(4))')
  })

  it('generates correct code', () => {
    expect(
      unaryOperator({
        name: 'unaryOperator',
        value: {
          operator: {
            value: '!'
          },
          operand: {
            name: 'primitive',
            value: '4'
          }
        }
      })
    ).toEqual('(_.__not__(4))')
  })
})
