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
  },
  {
    input: `.`,
    output: `(input => input)`
  },
  {
    input: `.hello`,
    output: `(input => input.hello)`
  }

]

describe('compiler', () => {
  tests.forEach(({input, output}: {input: string, output: string}) => {
    it(`compiles ${input}`, () => {
      expect(compile(input)).toEqual(output)
    })
  })
})
