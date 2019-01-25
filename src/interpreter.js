// @flow

import interpreterGenerator from './interpreterGenerator'
import type { OutputType, SourceCodeType } from './types'

export default (sourceCode: SourceCodeType): OutputType => {
  const process = interpreterGenerator(sourceCode)
  return (input: mixed, variables?: {[string]: mixed}): mixed => {
    const result = process([input], variables)
    for (let x of result) return x
  }
}
