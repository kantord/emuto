// @flow

import Parsimmon from 'parsimmon'
import type { NodeType, PrimitiveNodeType, ParserType } from '../../types'

export default Parsimmon.lazy((): ParserType => {
  const SectionParser = require('../section').default
  return Parsimmon.alt(
    Parsimmon.seq(
      SectionParser,
      Parsimmon.regexp(/\s*:\s*/),
      SectionParser
    ).map(
      (
        children: [PrimitiveNodeType, NodeType, PrimitiveNodeType]
      ): NodeType => ({
        type: 'tuple',
        value: [children[0], children[2]]
      })
    ),
    SectionParser
  )
})
