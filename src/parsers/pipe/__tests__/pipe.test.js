// @flow

import parser from '../pipe'

const codeExamples = ['$ | false', '.asd|.fgh']

describe('pipe parser', () => {
  it('returns correct value', () => {
    expect(parser.parse(codeExamples[0]).value).toEqual({
      name: 'pipe',
      value: {
        left: { name: 'input', value: '$' },
        right: { name: 'primitive', value: 'false' }
      }
    })
  })
  codeExamples.forEach((codeExample: string) => {
    it('parses code example', () => {
      expect(parser.parse(codeExample).status).toBe(true)
    })
  })
})
