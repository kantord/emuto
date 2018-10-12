import builtIns from '../builtins'

const { projection, join, map, sortBy, filter } = builtIns

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

  describe('sortBy', () => {
    it('returns correct value', () => {
      const id = a => a; // eslint-disable-line
      const foo = a => a.foo; // eslint-disable-line
      expect(sortBy(id)(['c', 'a', 'b'])).toEqual(['a', 'b', 'c'])
      expect(sortBy(foo)([{ foo: 3 }, { foo: -2 }, { foo: 0 }])).toEqual([
        { foo: -2 },
        { foo: 0 },
        { foo: 3 }
      ])
    })

    it('does not mutate original array', () => {
      const id = a => a; // eslint-disable-line
      const input = ['c', 'a', 'b']
      const originalValue = input.slice()
      sortBy(id)(input)
      expect(input).toEqual(originalValue)
    })
  })

  describe('filter', () => {
    it('returns correct value', () => {
      const foo = a => a.foo >= 0; // eslint-disable-line
      expect(filter(foo)([{ foo: 3 }, { foo: -2 }, { foo: 0 }])).toEqual([
        { foo: 3 },
        { foo: 0 }
      ])
    })

    it('does not mutate original array', () => {
      const f = a => a == 'a'; // eslint-disable-line
      const input = ['c', 'a', 'b']
      const originalValue = input.slice()
      filter(f)(input)
      expect(input).toEqual(originalValue)
    })
  })
})
