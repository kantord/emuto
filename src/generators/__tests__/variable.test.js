import variable from '../variable'

describe('variable generator', () => {
  it('null', () => {
    expect(variable({ name: 'variable', value: '$null' })).toEqual(
      `_.get('null')`
    )
  })
  it('false', () => {
    expect(variable({ name: 'variable', value: '$false' })).toEqual(
      `_.get('false')`
    )
  })
})
