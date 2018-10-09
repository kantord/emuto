// @flow

import P from 'parsimmon'

import type {
  FunctionCallLambdaNodeType,
  NodeType,
  IdentifierNodeType
} from '../types'

const FunctionCallLambdaParser = P.lazy((): mixed => {
  const TupleParser = require('./tuple/tuple').default
  const IdentifierParser = require('./identifier').default
  return P.seq(
    IdentifierParser,
    P.optWhitespace,
    P.alt(P.regexp(/\$\s*=>\s*/), P.string('\\')),
    P.optWhitespace,
    TupleParser
  ).map(
    ([left, _, __, ___, right]: [
      IdentifierNodeType,
      mixed,
      mixed,
      mixed,
      NodeType
    ]): FunctionCallLambdaNodeType => ({
      name: 'functionCallLambda',
      value: {
        left,
        right
      }
    })
  )
})

export default FunctionCallLambdaParser
