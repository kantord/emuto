import builtIns from '../builtins'

const {
  projection,
  join,
  map,
  sortBy,
  filter,
  get,
  assign,
  reverse,
  reduce,
  length,
  keys,
  split,
  values,
  combinations,
  product,
  __opt__,
  __spread__,
  has
} = builtIns

describe('built ins', () => {
  describe('projection', () => {
    it('handles non-negative numbers', () => {
      expect(projection([1, 2], [1], false)).toEqual(2)
    })
    it('handles string', () => {
      expect(projection({ foo: 'bar' }, ['foo'], false)).toEqual('bar')
    })
    it('handles list of strings', () => {
      expect(projection({ foo: 'bar' }, ['foo', 'baz'], false)).toEqual([
        'bar',
        null
      ])
    })
    it('handles negative numbers', () => {
      expect(projection([1, 2, 3], [-1], false)).toEqual(3)
      expect(projection([1, 2, 3], [-2], false)).toEqual(2)
      expect(projection([1, 2, 3], [-3], false)).toEqual(1)
    })
    it('handles list of numbers', () => {
      expect(projection([1, 2, 3], [-1, 0], false)).toEqual([3, 1])
    })
    it('handles sliceing of numbers', () => {
      expect(projection([1, 2, 3, 4], [[1, 3]], false)).toEqual([2, 3])
    })
    it('handles empty projection', () => {
      expect(projection([1, 2, 3], [], false)).toEqual([])
    })
    it('handles falsy list items', () => {
      expect(projection([0], [0], false)).toEqual(0)
      expect(projection([false], [0], false)).toEqual(false)
    })
    it('handles optional projection', () => {
      expect(projection(undefined, [], true)).toEqual(null)
      expect(projection(null, [], true)).toEqual(null)
      expect(projection([], [], true)).toEqual([])
    })
  })

  describe('__opt__', () => {
    const f = x => 'Hello'; // eslint-disable-line
    expect(__opt__(undefined, f)).toEqual(null)
    expect(__opt__(null, f)).toEqual(null)
    expect(__opt__([], f)).toEqual('Hello')
  })

  describe('__spread__', () => {
    const f = x => 'Hello'; // eslint-disable-line
    expect(__spread__([1, 2])).toEqual([1, 2])
    expect(__spread__({ a: 'b', c: 3 })).toEqual([['a', 'b'], ['c', 3]])
  })

  describe('join', () => {
    it('returns correct value', () => {
      expect(join(' ')(['Hello', 'World'])).toEqual('Hello World')
      expect(join(',')(['foo', 'World', ' '])).toEqual('foo,World, ')
    })
  })

  describe('split', () => {
    it('returns correct value', () => {
      expect(split(' ')('Hello World')).toEqual(['Hello', 'World'])
      expect(split(',')('Hello World')).toEqual(['Hello World'])
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

  describe('reduce', () => {
    it('returns correct value', () => {
      const x = a => b => a * b + 1; // eslint-disable-line
      expect(reduce([x, 4])([1, 2])).toEqual(11)
    })
  })

  describe('length', () => {
    it('returns correct value', () => {
      expect(length([1, 2])).toEqual(2)
      expect(length([1, 2, 4])).toEqual(3)
    })
  })

  describe('keys', () => {
    it('returns correct value', () => {
      expect(keys({})).toEqual([])
      expect(new Set(keys({ foo: 'bar', baz: 4 }))).toEqual(
        new Set(['foo', 'baz'])
      )
    })
  })

  describe('values', () => {
    it('returns correct value', () => {
      expect(values({})).toEqual([])
      expect(new Set(values({ foo: 'bar', baz: 4 }))).toEqual(
        new Set(['bar', 4])
      )
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

    describe('has', () => {
      it('returns correct value', () => {
        expect(has(0)(['c', 'a', 'b'])).toEqual(true)
        expect(has(10)(['c', 'a', 'b'])).toEqual(false)
        expect(has('foo')({ foo: false })).toEqual(true)
        expect(has('bar')({ foo: false })).toEqual(false)
      })
    })

    it('does not mutate original array', () => {
      const id = a => a; // eslint-disable-line
      const input = ['c', 'a', 'b']
      const originalValue = input.slice()
      sortBy(id)(input)
      expect(input).toEqual(originalValue)
    })
  })

  describe('reverse', () => {
    it('returns correct value', () => {
      expect(reverse(['c', 'a', 'b'])).toEqual(['b', 'a', 'c'])
    })

    it('does not mutate original array', () => {
      const input = ['c', 'a', 'b']
      const originalValue = input.slice()
      reverse(input)
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

  describe('assignment', () => {
    it('get fails without assignment', () => {
      expect(() => {
        get('foobar')
      }).toThrow()
    })

    it('assign works', () => {
      const context = {
        get,
        assign
      }
      let _ = assign('foobar', 3.14, context)
      expect(_.get('foobar')).toEqual(3.14)
      _ = _.assign('baz', 'Hello', _)
      expect(_.get('baz')).toEqual('Hello')
    })
  })

  describe('combinations', () => {
    it('returns correct value', () => {
      expect(combinations(2)('ABCD')).toEqual([
        ['A', 'B'],
        ['A', 'C'],
        ['A', 'D'],
        ['B', 'C'],
        ['B', 'D'],
        ['C', 'D']
      ])

      expect(combinations(3)([0, 1, 2, 3])).toEqual([
        [0, 1, 2],
        [0, 1, 3],
        [0, 2, 3],
        [1, 2, 3]
      ])
    })
  })

  describe('product', () => {
    it('returns correct value', () => {
      expect(product([['a', 'b'], []])).toEqual([])
      expect(product([['a', 'b'], ['1', '2']])).toEqual([
        ['a', '1'],
        ['b', '1'],
        ['a', '2'],
        ['b', '2']
      ])
    })
  })
})
