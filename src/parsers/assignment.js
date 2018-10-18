// @flow

import P from 'parsimmon'
import OperandParser from './operand'
import IdentifierParser from './identifier'
import TupleParser from './tuple/tuple'
import crap from './crap'

import type {
  AssignmentNodeValueType,
  NodeType,
  PrimitiveNodeType
} from '../types'

export default P.seq(
  TupleParser,
  crap
    .then(P.string('where'))
    .then(crap)
    .then(P.string('$'))
    .then(IdentifierParser),
  crap.then(P.string('=')).then(OperandParser.trim(crap))
)
  .map(
    ([program, name, value]: [
      NodeType,
      PrimitiveNodeType,
      NodeType
    ]): AssignmentNodeValueType => ({
      program,
      name,
      value
    })
  )
  .node('assignment')
