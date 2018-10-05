// @flow

import type { ParenthesesNodeType, GeneratedCodeType } from '../types'

export default ({ value }: ParenthesesNodeType): GeneratedCodeType =>
  `(${((): GeneratedCodeType => {
    const Generator = require('./generator').default
    return Generator(value)
  })()})`
