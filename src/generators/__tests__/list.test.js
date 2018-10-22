import list from '../list'

describe('list generator', () => {
  it('generates correct code', () => {
    expect(
      list({
        name: 'list',
        value: [
          {
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
        ]
      })
    ).toEqual('[input, input, [null]]')
  })

  it('generates correct code - spread', () => {
    expect(
      list({
        name: 'list',
        value: [
          {
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
          },
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
    ).toEqual('[input, input, [null]].concat(input).concat(input)')
  })
})
