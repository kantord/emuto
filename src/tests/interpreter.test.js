// @flow

import execute from '../interpreter'

const tests = [
  {
    sourceCode: `null`,
    output: null
  },
  {
    sourceCode: `true`,
    output: true
  },
  {
    sourceCode: `$`,
    input: true,
    output: true
  },
  {
    sourceCode: `$`,
    input: 98,
    output: 98
  },
  {
    sourceCode: `.bar`,
    input: {bar: 4, baz: 'hello'},
    output: 4
  },
  {
    sourceCode: `.$shit`,
    input: {$shit: null, baz: 'hello'},
    output: null
  },
  {
    sourceCode: `[0.14, true, "true 2"]`,
    output: [0.14, true, 'true 2']
  },
  {
    sourceCode: `[[false], [true, null]]`,
    output: [[false], [true, null]]
  },
  {
    sourceCode: `false | true`,
    output: true
  },
  {
    sourceCode: `.foo | .bar`,
    input: {
      foo: {
        bar: 'hello'
      }
    },
    output: 'hello'
  },
  {
    sourceCode: `.foo | .bar | .baz`,
    input: {
      foo: {
        bar: {
          baz: 'world'
        }
      }
    },
    output: 'world'
  },
  {
    sourceCode: `.apple.pear`,
    input: {
      apple: {
        pear: 42
      }
    },
    output: 42
  },
  {
    sourceCode: `.apple.pear.bar`,
    input: {
      apple: {
        pear: {bar: false}
      }
    },
    output: false
  },
  {
    sourceCode: `null: true`,
    output: [null, true]
  }
]

describe('interpreter', () => {
  tests.forEach(
    ({
      sourceCode,
      output,
      input
    }: {
      sourceCode: string,
      output: mixed,
      input?: mixed
    }) => {
      it(`executes ${sourceCode}`, () => {
        expect(execute(sourceCode)(input)).toEqual(output)
      })
    }
  )

  it('throws syntax error on invalid source code', () => {
    expect(() => {
      execute('¡')
    }).toThrow(SyntaxError)
  })
})
