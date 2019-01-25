// @flow

import type { OperationNodeType, GeneratedCodeType, NodeType } from '../types'

const Generator = ({ value }: OperationNodeType): GeneratedCodeType => {
  const compile = require('./generator').default
  const operators = {
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
    '/': 'divide',
    '<=': 'lte',
    '>=': 'gte',
    '<': 'lt',
    '>': 'gt',
    '&&': 'and',
    '||': 'or',
    '===': 'equals',
    '!==': 'notEqual',
    '%': 'mod'
  }

  const compileOperator = (operator: NodeType): GeneratedCodeType => {
    if (!('value' in operator)) throw new Error()
    if (typeof operator.value !== 'string') throw new Error()
    return operators[operator.value]
  }
  const buildCode = (node: Array<NodeType>): GeneratedCodeType =>
    node.length === 1
      ? compile(node[0])
      : `_.__${compileOperator(node[1])}__(${compile(node[0])})(${buildCode(
        node.slice(2)
      )})`
  return buildCode(value)
}

export default Generator
