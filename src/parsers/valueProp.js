// @flow

import Parsimmon from 'parsimmon'
import type {NodeType, ValuePropNodeType} from '../types'

const valueProp = Parsimmon.lazy((): mixed => {
  const ValueParser = require('./value').default
  return Parsimmon.seq(
    ValueParser,
    Parsimmon.regexp(/(\.[$A-Z_][0-9A-Z_$]*)+/i)
  ).map(([left, right]: [NodeType, string]): ValuePropNodeType => ({
    type: 'valueProp',
    value: {
      left,
      right
    }
  }))
})

export default valueProp
