// @flow

import P from 'parsimmon'

import type { NodeType, ParserType } from '../../types'

const BinaryOperatorParser = (
  OperandParser: ParserType,
  OperatorParser: ParserType
): ParserType =>
  P.lazy((): mixed => {
    const OperatorParser_ = OperatorParser.trim(P.optWhitespace).node(
      'primitive'
    )
    return P.seq(
      OperandParser,
      P.seq(OperatorParser_, OperandParser).many()
    ).map(
      (value: [NodeType, Array<NodeType>]): NodeType =>
        value[1].length > 0
          ? {
            name: 'binaryOperation',
            value: value[1].reduce(
              (a: Array<NodeType>, b: NodeType): Array<NodeType> =>
                a.concat(b),
              [value[0]]
            )
          }
          : value[0]
    )
  })

export default BinaryOperatorParser
