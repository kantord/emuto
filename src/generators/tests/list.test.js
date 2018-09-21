import list from '../list'

describe('list generator', () => {
  it('generates correct code', () => {
    expect(
      list({
        type: 'list',
        value: [
          {
            type: 'input',
            value: '$'
          },
          {
            type: 'input',
            value: '$'
          },
          {
            type: 'list',
            value: [{type: 'primitive', value: 'null'}]
          }
        ]
      })
    ).toEqual('[input, input, [null]]')
  })
})
