// @flow

import P from 'parsimmon'
import type { NodeType, ParserType } from '../../types'

export default P.lazy((): ParserType => {
  const SectionParser = require('../section').default
  return P.alt(
    P.seq(
      SectionParser,
      P.regexp(/\s*:\s*/)
        .then(SectionParser)
        .atMost(1)
    ).map(
      ([left, right]: [NodeType, Array<NodeType>]): NodeType =>
        right.length === 1
          ? {
            name: 'tuple',
            value: [left, right[0]]
          }
          : left
    )
  )
})
