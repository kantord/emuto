// @flow

import type { LambdaNodeType, GeneratedCodeType } from '../types'

export default ({ value }: LambdaNodeType): GeneratedCodeType =>
  `(function(${value.variable}) {${
    value.variable === 'input'
      ? ''
      : `_ = _.__assign__('${value.variable}', ${value.variable}, _); `
  }return ${((): GeneratedCodeType => {
    const Generator = require('./generator').default
    return Generator(value.definition)
  })()}})`
