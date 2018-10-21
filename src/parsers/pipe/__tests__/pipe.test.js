// @flow

import parser from '../pipe'

const codeExamples = ['$ | false', '.asd|.fgh']

describe('pipe parser', () => {
  it('returns correct value', () => {
    expect(parser.parse(codeExamples[0]).value).toMatchObject({
      name: 'pipe',
      value: {
        left: { name: 'variable', value: '$' },
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
