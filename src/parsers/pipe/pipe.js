// @flow

import Parsimmon from 'parsimmon'

import type { PipeNodeType, NodeType } from '../../types'

const PipeParser = Parsimmon.lazy((): mixed => {
  const TupleParser = require('../tuple/tuple').default
  const ProgramParser = require('../program').default
  return Parsimmon.seq(
    TupleParser,
    Parsimmon.regexp(/\s*\|\s*/),
    ProgramParser
  ).map((value: [NodeType, mixed, NodeType]): PipeNodeType => ({
    type: 'pipe',
    value: {
      left: value[0],
      right: value[2]
    }
  }))
})

export default PipeParser
