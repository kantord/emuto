import ternary from '../ternary'

describe('ternary generator', () => {
  it('generates correct code', () => {
    expect(
      ternary({
        name: 'ternary',
        value: {
          left: { name: 'primitive', value: '0' },
          middle: { name: 'primitive', value: '1' },
          right: { name: 'primitive', value: '2' }
        }
      })
    ).toEqual(
      '(_.__ternary__((1),function(){return(0)},function(){return(2)}))'
    )
  })
})
