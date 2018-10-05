import input from '../input'

describe('input generator', () => {
  it('$', () => {
    expect(input({ type: 'input', value: '$' })).toEqual('input')
  })
})
