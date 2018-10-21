// @flow

import primitive from './primitive'
import tuple from './tuple'
import inputProp from './inputProp'
import valueProp from './valueProp'
import list from './list'
import parentheses from './parentheses'
import object from './object'
import projection from './projection'
import pipe from './pipe'
import functionCall from './functionCall'
import binaryOperator from './binaryOperator'
import unaryOperator from './unaryOperator'
import assignment from './assignment'
import lambda from './lambda'
import variable from './variable'
import type { NodeType, GeneratedCodeType } from '../types'

const Generator = (node: NodeType): GeneratedCodeType => {
  switch (node.name) {
    case 'primitive':
      return primitive(node)
    case 'variable':
      return variable(node)
    case 'tuple':
      return tuple(node)
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
    case 'functionCall':
      return functionCall(Generator)(node)
    case 'lambda':
      return lambda(node)
    case 'binaryOperation':
      return binaryOperator(node)
    case 'unaryOperation':
      return unaryOperator(node)
    case 'assignment':
      return assignment(Generator)(node)
    default:
      throw new Error(`Unknown node name '${node.name}'`)
  }
}

export default Generator
