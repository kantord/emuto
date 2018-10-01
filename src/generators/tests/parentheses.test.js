import parentheses from '../parentheses'

describe('parentheses generator', () => {
  it('generates correct code', () => {
    expect(
      parentheses({
        type: 'parentheses',
        value: {
          type: 'primitive',
          value: '"asd"'
        }
      })
    ).toEqual('("asd")')
  })
})
