// @flow

import Program from './program'
import type {SourceCodeType, ParserReturnValueType} from '../types'

export default (sourceCode: SourceCodeType): ParserReturnValueType => {
  const results = Program.parse(sourceCode)
  if (!results.status) {
    const badPart = sourceCode
      .split('\n')[results.index.line - 1].slice(
        results.index.column - 1,
        results.index.column + 9
      )
    let error = new SyntaxError()
    error.lineNumber = results.index.line
    error.columnNumber = results.index.column
    error.message = `Expected ${results.expected.join(' or ')} on line ${
      results.index.line
    } column ${results.index.column}, found '${badPart}' instead`
    throw error
  }
  return results
}
