import pipe from '../pipe'

describe('pipe generator', () => {
  it('generates correct code', () => {
    expect(
      pipe({
        name: 'pipe',
        value: {
          left: {
            name: 'input',
            value: '.'
          },
          right: {
            name: 'primitive',
            value: 'false'
          }
        }
      })
    ).toEqual('(function (input) {return false})(input)')
  })
  it('generates correct code 2', () => {
    expect(
      pipe({
        name: 'pipe',
        value: {
          left: {
            name: 'primitive',
            value: 'true'
          },
          right: {
            name: 'primitive',
            value: 'null'
          }
        }
      })
    ).toEqual('(function (input) {return null})(true)')
  })
})
