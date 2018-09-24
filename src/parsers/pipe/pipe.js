// @flow

import Parsimmon from 'parsimmon'

import type {PipeNodeType, NodeType} from '../../types'

const PipeParser = Parsimmon.lazy((): mixed => {
  const ValueParser = require('../value').default
  const Parser = require('../parser').default
  return Parsimmon.seq(
    ValueParser,
    Parsimmon.regexp(/\s*\|\s*/),
    Parser
  ).map((value: [NodeType, mixed, NodeType]): PipeNodeType => ({
    type: 'pipe',
    value: {
      left: value[0],
      right: value[2]
    }
  }))
})

export default PipeParser
