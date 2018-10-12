// @flow

import type { UnaryOperationNodeType, GeneratedCodeType } from '../types'

export default ({ value }: UnaryOperationNodeType): GeneratedCodeType => {
  const Generator = require('./generator').default
  return `(${value.operator.value}(${Generator(value.operand)}))`
}
