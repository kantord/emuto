import input from '../input'

describe('input generator', () => {
  it('$', () => {
    expect(input({ name: 'input', value: '$' })).toEqual('input')
  })
})
