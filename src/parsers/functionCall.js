// @flow

import Parsimmon from 'parsimmon'

import type {
  FunctionCallNodeType,
  NodeType,
  IdentifierNodeType
} from '../types'

const FunctionCallParser = Parsimmon.lazy((): mixed => {
  const TupleParser = require('./tuple/tuple').default
  const IdentifierParser = require('./identifier').default
  return Parsimmon.seq(
    IdentifierParser,
    Parsimmon.optWhitespace,
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
