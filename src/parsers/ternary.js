// @flow

import P from 'parsimmon'
import crap from './crap'

import type {
  TupleNodeType,
  ParserType,
  NodeType
} from '../types'

export default P.lazy((): ParserType => {
  const TupleParser = require('./collections/tuple').default
  return P.seq(
    TupleParser,
    P.seq(
      P.string('if')
        .trim(crap)
        .then(TupleParser),
      P.string('else')
        .trim(crap)
        .then(TupleParser)
    ).atMost(1)
  ).map(
    ([tuple, rest]: [
      TupleNodeType,
      Array<[TupleNodeType, TupleNodeType]>
    ]): NodeType =>
      rest.length === 0
        ? tuple
        : {
          name: 'ternary',
          value: {
            left: tuple,
            middle: rest[0][0],
            right: rest[0][1]
          }
        }
  )
})
