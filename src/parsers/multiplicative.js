// @flow

import P from 'parsimmon'

import type { NodeType } from '../types'

const ListCoreParser = P.lazy((): mixed => {
  const OperandParser = require('./operand').default
  const OperatorParser = P.regexp(/[*/]/)
    .trim(P.optWhitespace)
    .node('operand')
  return P.seq(OperandParser, P.seq(OperatorParser, OperandParser).many()).map(
    (value: [NodeType, Array<NodeType>]): NodeType =>
      value[1].length > 0
        ? {
          name: 'multiplicative',
          value: value[1].reduce(
            (a: Array<NodeType>, b: NodeType): Array<NodeType> => a.concat(b),
            [value[0]]
          )
        }
        : value[0]
  )
})

export default ListCoreParser
