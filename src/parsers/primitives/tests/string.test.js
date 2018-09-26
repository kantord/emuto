// @flow

import parser from '../string'

const examples = [`""`, `"foo"`, `"Fo bar ²¡ü"`]

describe('string primitive parser', () => {
  examples.forEach((example: string) => {
    it('parses true', () => {
      expect(parser.parse(example).status).toBe(true)
    })
    it('returns correct value', () => {
      expect(parser.parse(example).value).toEqual({
        type: 'primitive',
        value: example
      })
    })
  })
})
