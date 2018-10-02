import pipe from '../pipe'

describe('pipe generator', () => {
  it('generates correct code', () => {
    expect(
      pipe({
        type: 'pipe',
        value: {
          left: {
            type: 'input',
            value: '.'
          },
          right: {
            type: 'primitive',
            value: 'false'
          }
        }
      })
    ).toEqual('(function (input) {return false})(input)')
  })
  it('generates correct code 2', () => {
    expect(
      pipe({
        type: 'pipe',
        value: {
          left: {
            type: 'primitive',
            value: 'true'
          },
          right: {
            type: 'primitive',
            value: 'null'
          }
        }
      })
    ).toEqual('(function (input) {return null})(true)')
  })
})
