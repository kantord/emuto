import builtIns from '../builtins'

const {projection} = builtIns

describe('built ins', () => {
  describe('projection', () => {
    it('handles non-negative numbers', () => {
      expect(projection([1, 2], [1])).toEqual(2)
    })
    it('handles string', () => {
      expect(projection({foo: 'bar'}, ['foo'])).toEqual('bar')
    })
  })
})
