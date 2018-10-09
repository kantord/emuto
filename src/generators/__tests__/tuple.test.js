import tuple from '../tuple'

const tree = {
  name: 'tuple',
  value: [
    { name: 'primitive', value: 'true' },
    { name: 'primitive', value: 'false' }
  ]
}

describe('tuple generator', () => {
  it('true: false', () => {
    expect(tuple(tree)).toEqual('[true,false]')
  })
})
