// @flow

import P from 'parsimmon'
import crap from './crap'

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
    crap,
    P.alt(
      P.string('$')
        .then(crap)
        .then(P.string('=>'))
        .then(crap),
      P.string('\\')
    ),
    crap,
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
