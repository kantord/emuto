// @flow

import parser from '../../primitive'
import type {SourceCodeType, ParserType} from '../../../types'

const testExample = (parser: ParserType): (SourceCodeType => void) => (
  example: SourceCodeType
) => {
  it('parses true', () => {
    expect(parser.parse(example).status).toBe(true)
  })
  it('returns correct value', () => {
    expect(parser.parse(example).value).toEqual({
      type: 'primitive',
      value: example
    })
  })
}

const stringExamples = [`""`, `"foo"`, `"Fo bar ²¡ü"`]
const numberExamples = ['3.14', '-42', '0', '111.111', '0.33']
const examples = [...stringExamples, ...numberExamples]

describe('primitive parser', () => {
  examples.forEach(testExample(parser))
})
