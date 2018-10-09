import object from '../object'

describe('object generator', () => {
  it('generates correct code', () => {
    expect(
      object({
        name: 'object',
        value: [
          {
            name: 'tuple',
            value: [
              { name: 'primitive', value: '"foo"' },
              { name: 'primitive', value: '"bar"' }
            ]
          },
          {
            name: 'tuple',
            value: [
              { name: 'primitive', value: '"baz"' },
              { name: 'primitive', value: '4' }
            ]
          }
        ]
      })
    ).toEqual('(_.objectify([["foo","bar"], ["baz",4]]))')
  })
})
