// @flow

import Parser from './parsers/parser'
import Generator from './generators/generator'
import type {SourceCodeType, GeneratedCodeType} from './types'

export default (input: SourceCodeType): GeneratedCodeType =>
  `(input => ${Generator(Parser.parse(input).value)})`
