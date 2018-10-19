// @flow

import type { LambdaNodeType, GeneratedCodeType } from '../types'

export default ({ value }: LambdaNodeType): GeneratedCodeType =>
  `(function(input) {return ${((): GeneratedCodeType => {
    const Generator = require('./generator').default
    return Generator(value)
  })()}})`
