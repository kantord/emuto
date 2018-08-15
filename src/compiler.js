// @flow

import PrimitiveParser from './parsers/primitive'
import PrimitiveGenerator from './generators/primitive'
import type {SourceCodeType, GeneratedCodeType} from './types'

export default (input: SourceCodeType): GeneratedCodeType =>
  PrimitiveGenerator(PrimitiveParser.parse(input).value)
