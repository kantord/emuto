// @flow

import compiler from './compiler'
import type { OutputType, SourceCodeType } from './types'
import builtIns from './builtins.js'

export default (sourceCode: SourceCodeType): OutputType => {
  const compiledFunction = eval(compiler(sourceCode)) // eslint-disable-line no-eval
  return (input: mixed, variables?: {[string]: mixed}): mixed =>
    compiledFunction({
      ...builtIns,
      ...JSON.parse(JSON.stringify(variables || {}))
    })(input)
}
