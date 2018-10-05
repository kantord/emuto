import tuple from '../tuple'

const tree = {
  type: 'tuple',
  value: [
    { type: 'primitive', value: 'true' },
    { type: 'primitive', value: 'false' }
  ]
}

describe('tuple generator', () => {
  it('true: false', () => {
    expect(tuple(tree)).toEqual('[true,false]')
  })
})
