// @flow

import P from 'parsimmon'

import type {
  FunctionCallNodeType,
  NodeType,
  IdentifierNodeType
} from '../types'

const FunctionCallParser = P.lazy((): mixed => {
  const TupleParser = require('./tuple/tuple').default
  const IdentifierParser = require('./identifier').default
  return P.seq(
    IdentifierParser,
    P.optWhitespace,
    TupleParser
  ).map(
    ([left, _, right]: [
      IdentifierNodeType,
      mixed,
      NodeType
    ]): FunctionCallNodeType => ({
      type: 'functionCall',
      value: {
        left,
        right
      }
    })
  )
})

export default FunctionCallParser
