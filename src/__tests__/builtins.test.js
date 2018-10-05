import builtIns from '../builtins'

const { projection, join, map } = builtIns

describe('built ins', () => {
  describe('projection', () => {
    it('handles non-negative numbers', () => {
      expect(projection([1, 2], [1])).toEqual(2)
    })
    it('handles string', () => {
      expect(projection({ foo: 'bar' }, ['foo'])).toEqual('bar')
    })
    it('handles list of strings', () => {
      expect(projection({ foo: 'bar' }, ['foo', 'baz'])).toEqual(['bar', null])
    })
    it('handles negative numbers', () => {
      expect(projection([1, 2, 3], [-1])).toEqual(3)
      expect(projection([1, 2, 3], [-2])).toEqual(2)
      expect(projection([1, 2, 3], [-3])).toEqual(1)
    })
    it('handles list of numbers', () => {
      expect(projection([1, 2, 3], [-1, 0])).toEqual([3, 1])
    })
    it('handles empty projection', () => {
      expect(projection([1, 2, 3], [])).toEqual([])
    })
    it('handles falsy list items', () => {
      expect(projection([0], [0])).toEqual(0)
      expect(projection([false], [0])).toEqual(false)
    })
  })

  describe('join', () => {
    it('returns correct value', () => {
      expect(join(' ')(['Hello', 'World'])).toEqual('Hello World')
      expect(join(',')(['foo', 'World', ' '])).toEqual('foo,World, ')
    })
  })

  describe('map', () => {
    it('returns correct value', () => {
      const id = a => a; // eslint-disable-line
      const foo = a => 'foo'; // eslint-disable-line
      expect(map(id)(['Hello', 'World'])).toEqual(['Hello', 'World'])
      expect(map(foo)(['Hello', 'World'])).toEqual(['foo', 'foo'])
    })
  })
})
