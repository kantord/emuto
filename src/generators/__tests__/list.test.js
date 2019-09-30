import list from '../list'

const segment = {
  name: 'simpleList',
  value: [
    {
      name: 'variable',
      value: '$'
    },
    {
      name: 'variable',
      value: '$'
    },
    {
      name: 'list',
      value: [
        {
          name: 'simpleList',
          value: [{ name: 'primitive', value: 'null' }]
        }
      ]
    }
  ]
}

describe('list generator', () => {
  it('generates correct code', () => {
    expect(
      list({
        name: 'list',
        value: [segment]
      })
    ).toEqual(
      '[].concat(_.__spread__([input, input, [].concat(_.__spread__([null]))]))'
    )
  })

  it('generates correct code - spread', () => {
    expect(
      list({
        name: 'list',
        value: [
          segment,
          {
            name: 'spread',
            value: {
              name: 'variable',
              value: '$'
            }
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
      '[].concat(_.__spread__([input, input, [].concat(_.__spread__([null]))])).concat(_.__spread__(input)).concat(_.__spread__(input))'
    )
  })
})
