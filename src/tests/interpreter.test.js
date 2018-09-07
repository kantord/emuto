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
  }
]

describe('interpreter', () => {
  tests.forEach(({sourceCode, output, input}: {sourceCode: string, output: mixed, input?: mixed}) => {
    it(`executes ${sourceCode}`, () => {
      expect(execute(sourceCode)(input)).toEqual(output)
    })
  })
})
