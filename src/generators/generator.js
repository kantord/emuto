// @flow

import primitive from './primitive'
import tuple from './tuple'
import input from './input'
import inputProp from './inputProp'
import list from './list'
import pipe from './pipe'
import type {NodeType, GeneratedCodeType} from '../types'

export default (node: NodeType): GeneratedCodeType => {
  switch (node.type) {
    case 'primitive':
      return primitive(node)
    case 'tuple':
      return tuple(node)
    case 'input':
      return input(node)
    case 'inputProp':
      return inputProp(node)
    case 'list':
      return list(node)
    case 'pipe':
      return pipe(node)
    default:
      throw new Error(`Unknown node type '${node.type}'`)
  }
}
