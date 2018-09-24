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
    sourceCode: `[false, true]`,
    output: [false, true]
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
})
