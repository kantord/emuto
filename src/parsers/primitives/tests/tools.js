// @flow

import type {
  SourceCodeType,
  ParserType
} from '../../../types'

export const testExample = (parser: ParserType): (SourceCodeType => void) => (
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
