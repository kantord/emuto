// @flow

import compiler from './compiler'
import type {OutputType, SourceCodeType} from './types'

export default (input: SourceCodeType): OutputType => eval(compiler(input)) // eslint-disable-line no-eval
