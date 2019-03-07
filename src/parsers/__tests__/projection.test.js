import parser from '../projection'

describe('projection parser', () => {
  it('does not parse incorrect nesting', () => {
    expect(parser.parse('{}{foo{bar}{baz}}').status).toBe(false)
  })

  it('parses [5, 6, 7][5]', () => {
    expect(parser.parse('[5, 6, 7][5]').status).toBe(true)
  })

  it('parses null', () => {
    expect(parser.parse('null').status).toBe(true)
  })

  it('parses {"foo": "bar"}["foo"]', () => {
    expect(parser.parse('{"foo": "bar"}["foo"]').status).toBe(true)
  })

  it('parses {"foo": "bar"}{"foo"}', () => {
    expect(parser.parse('{"foo": "bar"}{"foo"}').status).toBe(true)
  })

  it('parses {"foo": "bar"}{"foo", bar}', () => {
    expect(parser.parse('{"foo": "bar"}{"foo", bar}').status).toBe(true)
  })

  it('parses {"foo": "bar"}{baz, foo,bar}', () => {
    expect(parser.parse('{"foo": "bar"}{baz, foo,bar}').status).toBe(true)
  })

  it('parses {"foo": "bar"}{baz, ...foo,bar}', () => {
    expect(parser.parse('{"foo": "bar"}{baz, ...foo,bar}').status).toBe(true)
  })

  it('parses {"foo": "bar"}{baz, ... Bar,bar}', () => {
    expect(parser.parse('{"foo": "bar"}{baz, ... Bar,bar}').status).toBe(true)
  })

  it('parses {"foo": "bar"}{baz, foo{one, two}, bar}', () => {
    expect(parser.parse('{"foo": "bar"}{baz, foo{one, two}, bar}').status).toBe(
      true
    )
  })

  it('parses {"foo": "bar"}{baz, foo{one, two}, bar}', () => {
    expect(parser.parse('{"foo": "bar"}{fooBar: foo_bar, baz}').status).toBe(
      true
    )
  })

  it('parses {"foo": "bar"}{baz, foo,bar} (multiline)', () => {
    expect(
      parser.parse(`{"foo": "bar"}{
          baz
          foo
          bar
      }`).status
    ).toBe(true)
  })

  it('parses multiline nested example', () => {
    expect(
      parser.parse(`\${
        foo {
            bar {}
            baz {
                one { two, three { four} }
                baz
            }
        }
      }`).status
    ).toBe(true)
  })

  it('parses {"foo": "bar"}["foo"]', () => {
    expect(parser.parse('{"foo": "bar"}["foo", -3]').status).toBe(true)
  })

  it('parses [5, 6, 7]  [5]', () => {
    expect(parser.parse('[5, 6, 7]  [5:2, 4]').status).toBe(true)
  })

  it('parses [5, 6, 7]?[5]', () => {
    expect(parser.parse('[5, 6, 7]?[5]').status).toBe(true)
  })

  it('parses [5, 6, 7]?.foo?.bar', () => {
    expect(parser.parse('[5, 6, 7]?.foo?.bar').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('false').value).toMatchObject({
      name: 'primitive',
      value: 'false'
    })
  })

  it('returns correct value', () => {
    expect(parser.parse('$?.foo').value).toMatchObject({
      value: {
        optional: true,
        right: '.foo'
      }
    })
  })

  it('returns correct value', () => {
    expect(parser.parse('$?[]').value).toMatchObject({
      value: {
        optional: true
      }
    })
  })

  it('returns correct value - object projection with aliases', () => {
    expect(
      parser.parse(`[3, 2]{ foo: bar, bar: foo { baz } }`).value
    ).toMatchObject({
      name: 'objectProjection',
      value: {
        optional: false,
        left: {
          name: 'list',
          value: [
            {
              name: 'simpleList',
              value: [
                {
                  name: 'primitive',
                  value: '3'
                },
                {
                  name: 'primitive',
                  value: '2'
                }
              ]
            }
          ]
        },
        right: [
          { type: 'SimpleItem', value: 'bar', alias: 'foo' },
          {
            name: 'foo',
            type: 'RecursiveItem',
            alias: 'bar',
            value: {
              name: 'objectProjection',
              value: [{ type: 'SimpleItem', value: 'baz' }]
            }
          }
        ]
      }
    })
  })

  it('returns correct value - object projection', () => {
    expect(
      parser.parse(`[3, 2]{foo,"bar"
          baz
          }`).value
    ).toMatchObject({
      name: 'objectProjection',
      value: {
        optional: false,
        left: {
          name: 'list',
          value: [
            {
              name: 'simpleList',
              value: [
                {
                  name: 'primitive',
                  value: '3'
                },
                {
                  name: 'primitive',
                  value: '2'
                }
              ]
            }
          ]
        },
        right: [
          { type: 'SimpleItem', value: 'foo' },
          { type: 'SimpleItem', value: 'bar' },
          { type: 'SimpleItem', value: 'baz' }
        ]
      }
    })
  })

  it('returns correct value - recursive object projection', () => {
    expect(parser.parse('{}{ foo { ...bar, baz {x} }}').value).toMatchObject({
      name: 'objectProjection',
      value: {
        left: {
          end: { column: 3, line: 1, offset: 2 },
          name: 'object',
          start: { column: 1, line: 1, offset: 0 },
          value: [
            {
              end: { column: 2, line: 1, offset: 1 },
              name: 'simpleList',
              start: { column: 2, line: 1, offset: 1 },
              value: []
            }
          ]
        },
        optional: false,
        right: [
          {
            name: 'foo',
            type: 'RecursiveItem',
            value: {
              name: 'objectProjection',
              value: [
                { type: 'FragmentItem', value: 'bar' },
                {
                  name: 'baz',
                  type: 'RecursiveItem',
                  value: {
                    name: 'objectProjection',
                    value: [{ type: 'SimpleItem', value: 'x' }]
                  }
                }
              ]
            }
          }
        ]
      }
    })
  })

  it('returns correct value', () => {
    expect(parser.parse('[3, 2][3]').value).toMatchObject({
      name: 'projection',
      value: {
        optional: false,
        left: {
          name: 'list',
          value: [
            {
              name: 'simpleList',
              value: [
                {
                  name: 'primitive',
                  value: '3'
                },
                {
                  name: 'primitive',
                  value: '2'
                }
              ]
            }
          ]
        },
        right: {
          name: 'list',
          value: [
            {
              name: 'simpleList',
              value: [
                {
                  name: 'primitive',
                  value: '3'
                }
              ]
            }
          ]
        }
      }
    })
  })
})
