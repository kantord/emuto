// @flow

import primitive from './primitive'
import tuple from './tuple'
import type {NodeType, GeneratedCodeType} from '../types'

export default (node: NodeType): GeneratedCodeType => {
  switch (node.type) {
    case 'primitive':
      return primitive(node)
    case 'tuple':
      return tuple(node)
    default:
      throw new Error(`Unknown node type '${node.type}'`)
  }
}
