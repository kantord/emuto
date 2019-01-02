import pipe from '../pipe'

describe('pipe generator', () => {
  it('generates correct code', () => {
    expect(
      pipe({
        name: 'pipe',
        value: [
          {
            name: 'variable',
            value: '$'
          },
          {
            name: 'primitive',
            value: 'false'
          }
        ]
      })
    ).toEqual('(function (input) {return false})(input)')
  })
  it('generates correct code 2', () => {
    expect(
      pipe({
        name: 'pipe',
        value: [
          {
            name: 'primitive',
            value: 'true'
          },
          {
            name: 'primitive',
            value: 'null'
          },
          {
            name: 'primitive',
            value: 'false'
          }
        ]
      })
    ).toEqual(
      '(function (input) {return false})((function (input) {return null})(true))'
    )
  })

  it('generates correct code 3', () => {
    expect(
      pipe({
        name: 'pipe',
        value: [
          {
            name: 'variable',
            value: '$'
          }
        ]
      })
    ).toEqual('input')
  })
})
