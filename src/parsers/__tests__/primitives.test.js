// @flow

import parser from '../primitive'
import type { SourceCodeType, ParserType } from '../../types'

const testExample = (parser: ParserType): (SourceCodeType => void) => (
  example: SourceCodeType
) => {
  it(`parses ${example}`, () => {
    expect(parser.parse(example).status).toBe(true)
  })
  it(`returns correct value for ${example}`, () => {
    expect(parser.parse(example).value).toEqual({
      name: 'primitive',
      value: example.replace('_', '')
    })
  })
}

const stringExamples = [`""`, `"foo"`, `"Fo ba'r' ²¡ü"`, `'asd "go" asd'`]
const numberExamples = [
  '3.14',
  '42',
  '0',
  '111.111',
  '0.33',
  '100_000',
  '1_2_4_55'
]
const examples = [...stringExamples, ...numberExamples]

describe('primitive parser', () => {
  examples.forEach(testExample(parser))

  it('doesnt parse 10__333_', () => {
    expect(parser.parse('10__333_').status).toBe(false)
  })

  it('parses true', () => {
    expect(parser.parse('true').status).toBe(true)
  })

  it('parses false', () => {
    expect(parser.parse('false').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('false').value).toEqual({
      name: 'primitive',
      value: 'false'
    })
  })

  it('parses null', () => {
    expect(parser.parse('null').status).toBe(true)
  })

  it('returns correct value', () => {
    expect(parser.parse('null').value).toEqual({
      name: 'primitive',
      value: 'null'
    })
  })
})
