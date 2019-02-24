import parser from '../projection'

describe('projection parser', () => {
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

  it('parses {"foo": "bar"}{baz, foo,bar} (multiline)', () => {
    expect(
      parser.parse(`{"foo": "bar"}{
          baz
          foo
          bar
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
