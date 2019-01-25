// @flow

import type { GeneratedCodeType, NodeType } from '../../types'

export default (operators: {
  [string]: GeneratedCodeType
}): (NodeType => GeneratedCodeType) => (
  operator: NodeType
): GeneratedCodeType => {
  if (!('value' in operator)) throw new Error()
  if (typeof operator.value !== 'string') throw new Error()
  return operators[operator.value]
}
