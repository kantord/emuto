import generator from '../generator'

describe('generator', () => {
  it('throws error on unknown node types', () => {
    expect(() => {
      generator({
        type: 'bullshit'
      })
    }).toThrow("Unknown node type 'bullshit'")
  })
})
