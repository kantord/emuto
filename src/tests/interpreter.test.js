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
    sourceCode: `.`,
    input: true,
    output: true
  },
  {
    sourceCode: `.`,
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
