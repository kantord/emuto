// @flow

import compile from '../compiler'

const tests = [
  {
    input: `null`,
    output: `(input => null)`
  },
  {
    input: `true`,
    output: `(input => true)`
  }
]

describe('compiler', () => {
  tests.forEach(({input, output}: {input: string, output: string}) => {
    it(`compiles ${input}`, () => {
      expect(compile(input)).toEqual(output)
    })
  })
})
