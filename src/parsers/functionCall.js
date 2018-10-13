// @flow

import P from 'parsimmon'
import crap from './crap'

import type {
  FunctionCallNodeType,
  NodeType,
  IdentifierNodeType
} from '../types'

const FunctionCallParser = P.lazy((): mixed => {
  const TupleParser = require('./tuple/tuple').default
  const IdentifierParser = require('./identifier').default
  return P.seq(IdentifierParser, crap, TupleParser).map(
    ([left, _, right]: [
      IdentifierNodeType,
      mixed,
      NodeType
    ]): FunctionCallNodeType => ({
      name: 'functionCall',
      value: {
        left,
        right
      }
    })
  )
})

export default FunctionCallParser
