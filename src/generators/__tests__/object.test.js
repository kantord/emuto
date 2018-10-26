import object from '../object'

describe('object generator', () => {
  it('generates correct code', () => {
    expect(
      object({
        name: 'object',
        value: [
          {
            name: 'simpleList',
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
          },
          {
            name: 'spread',
            value: {
              name: 'variable',
              value: '$'
            }
          }
        ]
      })
    ).toEqual(
      '(_.objectify([["foo","bar"], ["baz",4]].concat(_.__spread__(input))))'
    )
  })
})
