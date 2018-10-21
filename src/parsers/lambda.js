// @flow

import P from 'parsimmon'
import crap from './crap'
import TupleParser from './tuple/tuple'
import IdentifierParser from './identifier'

import type { LambdaNodeValueType, NodeType, VariableNodeType } from '../types'

export default P.alt(
  P.seq(
    P.string('$')
      .then(IdentifierParser.atMost(1))
      .skip(crap)
      .skip(P.string('=>')),
    crap.then(TupleParser)
  ).map(
    ([variable, definition]: [
      Array<VariableNodeType>,
      NodeType
    ]): LambdaNodeValueType => ({
      variable: variable.length ? variable[0].value : 'input',
      definition
    })
  ),
  P.string('\\')
    .then(crap)
    .then(TupleParser)
    .map((definition: NodeType): LambdaNodeValueType => ({
      variable: 'input',
      definition
    }))
)
  .trim(crap)
  .node('lambda')
