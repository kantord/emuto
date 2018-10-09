import generator from '../generator'

describe('generator', () => {
  it('throws error on unknown node types', () => {
    expect(() => {
      generator({
        name: 'bullshit'
      })
    }).toThrow("Unknown node name 'bullshit'")
  })
})
