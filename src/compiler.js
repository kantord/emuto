// @flow

import parse from './parsers/parser'
import Generator from './generators/generator'
import type {SourceCodeType, GeneratedCodeType} from './types'

export default (input: SourceCodeType): GeneratedCodeType => {
  const {value} = parse(input)
  return `(function(_) { return (function(input) { return ${Generator(
    value
  )}})})`
}
