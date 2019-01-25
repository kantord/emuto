// @flow

import type {
  UnaryOperationNodeType,
  GeneratedCodeType,
  NodeType
} from '../types'

export default ({ value }: UnaryOperationNodeType): GeneratedCodeType => {
  const Generator = require('./generator').default
  const operators = {
    '+': 'id',
    '-': 'negateNumber',
    '!': 'not'
  }
  const compileOperator = (operator: NodeType): GeneratedCodeType => {
    if (!('value' in operator)) throw new Error()
    if (typeof operator.value !== 'string') throw new Error()
    return operators[operator.value]
  }
  return `(_.__${compileOperator(value.operator)}__(${Generator(
    value.operand
  )}))`
}
