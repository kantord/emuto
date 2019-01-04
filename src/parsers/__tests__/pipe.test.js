// @flow

import parser from '../pipe'

const codeExamples = ['$ | false', '.asd|.fgh', '3']

describe('pipe parser', () => {
  it('returns correct value', () => {
    expect(parser.parse(codeExamples[0]).value).toMatchObject({
      name: 'pipe',
      value: [
        { name: 'variable', value: '$' },
        { name: 'primitive', value: 'false' }
      ]
    })
  })
  codeExamples.forEach((codeExample: string) => {
    it('parses code example', () => {
      expect(parser.parse(codeExample).status).toBe(true)
    })
  })
  it('returns correct value 2', () => {
    expect(parser.parse(codeExamples[2]).value).toMatchObject({
      name: 'pipe',
      value: [{ name: 'primitive', value: '3' }]
    })
  })
})
