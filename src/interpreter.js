// @flow

import compiler from './compiler'
import type { OutputType, SourceCodeType } from './types'
import builtIns from './builtins.js'

export default (input: SourceCodeType): OutputType =>
  eval(compiler(input))(builtIns) // eslint-disable-line no-eval
