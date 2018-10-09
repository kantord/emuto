import list from '../list'

describe('list generator', () => {
  it('generates correct code', () => {
    expect(
      list({
        name: 'list',
        value: [
          {
            name: 'input',
            value: '$'
          },
          {
            name: 'input',
            value: '$'
          },
          {
            name: 'list',
            value: [{ name: 'primitive', value: 'null' }]
          }
        ]
      })
    ).toEqual('[input, input, [null]]')
  })
})
