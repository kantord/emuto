import parser from '../lambda'

describe('lambda parser', () => {
  it('parses correct string - syntax 1', () => {
    expect(parser.parse(`$ => 3 + 4`).status).toBe(true)
    expect(parser.parse(`$ => 1`).status).toBe(true)
  })

  it('parses correct string - syntax 1 - custom variable name', () => {
    expect(parser.parse(`$foo => $foo`).status).toBe(true)
    expect(parser.parse(`$bar => $baz => "Hello" + $bar + $baz`).status).toBe(
      true
    )
  })

  it('parses correct string - syntax 2', () => {
    expect(parser.parse(`\\3 + 4`).status).toBe(true)
    expect(parser.parse(`\\1`).status).toBe(true)
  })

  it('returns correct string', () => {
    expect(parser.parse('$ => 4').value).toMatchObject({
      name: 'lambda',
      value: {
        variable: 'input',
        definition: {
          name: 'primitive',
          value: '4'
        }
      }
    })
  })

  it('returns correct string - custom variable name', () => {
    expect(parser.parse('$foo => 4').value).toMatchObject({
      name: 'lambda',
      value: {
        variable: 'foo',
        definition: {
          name: 'primitive',
          value: '4'
        }
      }
    })
  })
})
