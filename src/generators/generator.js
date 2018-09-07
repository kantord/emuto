// @flow

import primitive from './primitive'
import tuple from './tuple'
import type {NodeType, GeneratedCodeType} from '../types'

const generateBody = (node: NodeType): GeneratedCodeType => {
  switch (node.type) {
    case 'primitive':
      return primitive(node)
    case 'tuple':
      return tuple(node)
    default:
      throw new Error(`Unknown node type '${node.type}'`)
  }
}

export default (node: NodeType): GeneratedCodeType => {
  const body = generateBody(node)
  return `input => (${body})`
}
