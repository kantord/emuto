import lambda from '../lambda'

describe('lambda generator', () => {
  it('returns correct code', () => {
    expect(
      lambda({
        name: 'lambda',
        value: {
          name: 'primitive',
          value: '4'
        }
      })
    ).toEqual(`(function(input) {return 4})`)
  })

  it('returns correct code', () => {
    expect(
      lambda({
        name: 'lambda',
        value: {
          name: 'primitive',
          value: '8'
        }
      })
    ).toEqual(`(function(input) {return 8})`)
  })
})
