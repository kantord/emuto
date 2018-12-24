// @flow

import P from 'parsimmon'
import crap from '../crap'

import type {
  NodeType,
  ParserType,
  UnaryOperationNodeType,
  PrimitiveNodeType
} from '../../types'

const UnaryOperatorParser = P.lazy((): ParserType => {
  const OperatorParser = P.oneOf('+-!')
    .trim(crap)
    .node('primitive')
  const ProjectionParser = require('../projection').default
  return P.seq(OperatorParser.many(), ProjectionParser)
    .map(
      ([operators, operand]: [Array<PrimitiveNodeType>, NodeType]): NodeType =>
        operators.length > 0
          ? operators.reduce(
            (a: NodeType, b: PrimitiveNodeType): UnaryOperationNodeType => ({
              name: 'unaryOperation',
              value: {
                operator: b,
                operand: a
              }
            }),
            operand
          )
          : operand
    )
    .desc('unaryOperator')
})

export default UnaryOperatorParser
