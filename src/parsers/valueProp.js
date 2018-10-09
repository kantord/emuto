// @flow

import P from 'parsimmon'
import type { NodeType } from '../types'

const valueProp = P.lazy((): mixed => {
  const ValueParser = require('./value').default
  return P.seq(ValueParser, P.regexp(/(\.[$A-Z_][0-9A-Z_$]*)+/i))
    .map(([left, right]: [NodeType, string]): {
      left: NodeType,
      right: string
    } => ({
      left,
      right
    }))
    .node('valueProp')
})

export default valueProp
