import object from '../object'

describe('object generator', () => {
  it('generates correct code', () => {
    expect(
      object({
        type: 'object',
        value: [
          {
            type: 'tuple',
            value: [
              {type: 'primitive', value: '"foo"'},
              {type: 'primitive', value: '"bar"'}
            ]
          },
          {
            type: 'tuple',
            value: [
              {type: 'primitive', value: '"baz"'},
              {type: 'primitive', value: '4'}
            ]
          }
        ]
      })
    ).toEqual(
      '([["foo","bar"], ["baz",4]].reduce(function(a,b){a[b[0]]=b[1];return a;},{}))'
    )
  })
})
