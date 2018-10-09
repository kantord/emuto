import parentheses from '../parentheses'

describe('parentheses generator', () => {
  it('generates correct code', () => {
    expect(
      parentheses({
        name: 'parentheses',
        value: {
          name: 'primitive',
          value: '"asd"'
        }
      })
    ).toEqual('("asd")')
  })
})
