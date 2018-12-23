// @flow

import P from 'parsimmon'
import crap from './crap'

import type {
  FunctionCallNodeType,
  NodeType,
  IdentifierNodeType
} from '../types'

const FunctionCallParser = P.lazy((): mixed => {
  const TupleParser = require('./collections/tuple').default
  const IdentifierParser = require('./identifier').default
  return P.seq(IdentifierParser, crap, TupleParser.atMost(1)).map(
    ([left, _, right]: [
      IdentifierNodeType,
      mixed,
      NodeType
    ]): FunctionCallNodeType => ({
      name: 'functionCall',
      value: {
        left,
        right: right[0] || null
      }
    })
  )
})

export default FunctionCallParser
