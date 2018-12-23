// @flow

import P from 'parsimmon'

import type { NodeType } from '../types'

const PipeParser = P.lazy((): mixed => {
  const TupleParser = require('./collections/tuple').default
  const TernaryParser = require('./ternary').default
  return P.alt(TernaryParser, TupleParser)
    .sepBy1(P.regexp(/\s*\|\s*/))
    .map((value: Array<NodeType>): NodeType =>
      value.slice(1).reduce(
        (a: NodeType, b: NodeType): NodeType => ({
          name: 'pipe',
          value: {
            left: a,
            right: b
          }
        }),
        value[0]
      )
    )
})

export default PipeParser
