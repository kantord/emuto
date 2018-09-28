// @flow

import Program from './program'
import type {SourceCodeType, ParserReturnValueType} from '../types'

export default (sourceCode: SourceCodeType): ParserReturnValueType => {
  const results = Program.parse(sourceCode)
  if (!results.status) {
    let error = new SyntaxError()
    error.lineNumber = results.index.line
    error.columnNumber = results.index.column
    error.message = `Expected ${results.expected.join(' or ')}`
    throw error
  }
  return results
}
