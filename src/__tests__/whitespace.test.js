// @flow

import parse from '../parsers/parser'
const examples = [
  ` 0`,
  `0 `,
  `[
0
]`
]

describe('whitespace tests', () => {
  examples.forEach((example: string): void =>
    it(`parses '${example.slice(0, 25)}'`, () => {
      parse(example)
    })
  )
})
