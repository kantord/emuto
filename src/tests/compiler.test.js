// @flow

import compile from '../compiler'

const tests = [
  {
    input: `null`,
    output: `(function(_) { return (function(input) { return null})})`
  },
  {
    input: `true`,
    output: `(function(_) { return (function(input) { return true})})`
  },
  {
    input: `$`,
    output: `(function(_) { return (function(input) { return input})})`
  },
  {
    input: `.hello`,
    output: `(function(_) { return (function(input) { return input.hello})})`
  }
]

describe('compiler', () => {
  tests.forEach(({input, output}: {input: string, output: string}) => {
    it(`compiles ${input}`, () => {
      expect(compile(input)).toEqual(output)
    })
  })
})
