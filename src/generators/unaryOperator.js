// @flow

import type { UnaryOperationNodeType, GeneratedCodeType } from '../types'

export default ({ value }: UnaryOperationNodeType): GeneratedCodeType => {
  const Generator = require('./generator').default
  return `((${Generator(value.operand)}).then(function(operand) {(${
    value.operator.value
  })operand}))`
}
