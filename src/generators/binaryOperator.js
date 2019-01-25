// @flow

import type { OperationNodeType, GeneratedCodeType, NodeType } from '../types'

export default ({ value }: OperationNodeType): GeneratedCodeType => {
  return `${value
    .map((item: NodeType): string => {
      const Generator = require('./generator').default
      return Generator(item)
    })
    .join('')}`
}
