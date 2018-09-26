// @flow

import parser from '../number'

const examples = ['3.14', '-42', '0', '111.111', '0.33']

describe('number primitive parser', () => {
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
