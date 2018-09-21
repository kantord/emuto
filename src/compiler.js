// @flow

import Parser from './parsers/parser'
import Generator from './generators/generator'
import type {SourceCodeType, GeneratedCodeType} from './types'

export default (input: SourceCodeType): GeneratedCodeType => {
  const {value} = Parser.parse(input)
  return `(input => ${Generator(value)})`
}
