// @flow

import Parser from './parsers/parser'
import Generator from './generators/generator'
import type {SourceCodeType, GeneratedCodeType} from './types'

export default (input: SourceCodeType): GeneratedCodeType => {
  const parsed = Parser.parse(input).value
  return `(input => ${Generator(parsed)})`
}
