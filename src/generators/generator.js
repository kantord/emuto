// @flow

import primitive from './primitive'
import tuple from './tuple'
import input from './input'
import inputProp from './inputProp'
import valueProp from './valueProp'
import list from './list'
import parentheses from './parentheses'
import object from './object'
import projection from './projection'
import pipe from './pipe'
import type { NodeType, GeneratedCodeType } from '../types'

const Generator = (node: NodeType): GeneratedCodeType => {
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
    case 'valueProp':
      return valueProp(Generator)(node)
    case 'object':
      return object(node)
    case 'parentheses':
      return parentheses(node)
    case 'projection':
      return projection(Generator)(node)
    default:
      throw new Error(`Unknown node type '${node.type}'`)
  }
}

export default Generator
