// @flow

import P from 'parsimmon'
import type { NodeType, PrimitiveNodeType, ParserType } from '../../types'

export default P.lazy((): ParserType => {
  const SectionParser = require('../section').default
  return P.alt(
    P.seq(
      SectionParser,
      P.regexp(/\s*:\s*/),
      SectionParser
    ).map(
      (
        children: [PrimitiveNodeType, NodeType, PrimitiveNodeType]
      ): NodeType => ({
        name: 'tuple',
        value: [children[0], children[2]]
      })
    ),
    SectionParser
  )
})
