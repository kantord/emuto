import lambda from '../lambda'

describe('lambda generator', () => {
  it('returns correct code', () => {
    expect(
      lambda({
        name: 'lambda',
        value: {
          variable: 'input',
          definition: {
            name: 'primitive',
            value: '4'
          }
        }
      })
    ).toEqual(`(function(input) {return 4})`)
  })

  it('returns correct code', () => {
    expect(
      lambda({
        name: 'lambda',
        value: {
          variable: 'input',
          definition: {
            name: 'primitive',
            value: '8'
          }
        }
      })
    ).toEqual(`(function(input) {return 8})`)
  })

  it('returns correct code', () => {
    expect(
      lambda({
        name: 'lambda',
        value: {
          variable: 'foobar3',
          definition: {
            name: 'primitive',
            value: '8'
          }
        }
      })
    ).toEqual(
      `(function(foobar3) {_ = _.__assign__('foobar3', foobar3, _); return 8})`
    )
  })
})
