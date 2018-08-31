// @flow

import Parsimmon from 'parsimmon'
import type { NodeType, PrimitiveNodeType } from '../../types'

import PrimitiveParser from '../primitive'

const separator = Parsimmon.seq(
  Parsimmon.optWhitespace,
  Parsimmon.string(':'),
  Parsimmon.optWhitespace
)

export default Parsimmon.seq(PrimitiveParser, separator, PrimitiveParser).map(
  (children: [PrimitiveNodeType, NodeType, PrimitiveNodeType]): NodeType => ({
    type: 'tuple',
    value: [children[0], children[2]]
  })
)
