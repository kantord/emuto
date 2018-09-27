// @flow

import Parsimmon from 'parsimmon'
import type {NodeType, PrimitiveNodeType} from '../../types'

import PrimitiveParser from '../primitive'

export default Parsimmon.seq(
  PrimitiveParser,
  Parsimmon.regexp(/\s*:\s*/),
  PrimitiveParser
).map(
  (children: [PrimitiveNodeType, NodeType, PrimitiveNodeType]): NodeType => ({
    type: 'tuple',
    value: [children[0], children[2]]
  })
)
