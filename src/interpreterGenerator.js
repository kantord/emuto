// @flow

import compiler from './compiler'
import type { GeneratorOutputType, SourceCodeType } from './types'
import builtIns from './builtins.js'

export default (sourceCode: SourceCodeType): GeneratorOutputType => {
  const compiledFunction = eval(compiler(sourceCode)) // eslint-disable-line no-eval
  return function * (
    inputs: Iterable<mixed>,
    variables?: {[string]: mixed}
  ): Iterable<mixed> {
    const process = compiledFunction({
      ...builtIns,
      ...JSON.parse(JSON.stringify(variables || {}))
    })
    const result = process(inputs)
    for (let x of result) yield x
  }
}
