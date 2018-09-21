// @flow

import Parsimmon from 'parsimmon'

import type {PipeNodeType, NodeType} from '../../types'

const PipeParser = Parsimmon.lazy((): mixed => {
  const ValueParser = require('../value').default
  return Parsimmon.seq(
    ValueParser,
    Parsimmon.regexp(/\s*\|\s*/),
    ValueParser
  ).map((value: [NodeType, mixed, NodeType]): PipeNodeType => ({
    type: 'pipe',
    value: {
      left: value[0],
      right: value[2]
    }
  }))
})

export default PipeParser
