// @flow

import parser from '../in'

const trueCases = [
  '"foo" in {"foo": "bar"}',
  ' "b" in {"a": "AA", "b": 22}'
]
const falseCases = [
  '"bar" in {"foo": "bar"}',
  ' "c" in {"a": "AA", "b": 22}'
]

describe('in parser', () => {
  trueCases.forEach((item: string) => {
    it('parses correct string - truthy syntax', () => {
      expect(parser.parse(item).status).toBe(true)
    })
  })

  falseCases.forEach((item: string) => {
    it('parses correct string - falsy syntax', () => {
      expect(parser.parse(item).status).toBe(true)
    })
  })

  trueCases.forEach((item: string) => {
    it('parses correct string - truthy values', () => {
      expect(parser.parse(item).value).toMatchObject({
        name: 'in',
        value: true
      })
    })
  })

  falseCases.forEach((item: string) => {
    it('parses correct string - falsy values', () => {
      expect(parser.parse(item).value).toMatchObject({
        name: 'in',
        value: false
      })
    })
  })
})
