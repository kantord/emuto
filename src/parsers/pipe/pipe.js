// @flow

import Parsimmon from 'parsimmon'

import type {PipeNodeType, NodeType} from '../../types'

const PipeParser = Parsimmon.lazy((): mixed => {
  const SectionParser = require('../section').default
  const ProgramParser = require('../program').default
  return Parsimmon.seq(
    SectionParser,
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
