// @flow

import P from 'parsimmon'

import type { PipeNodeType, NodeType } from '../../types'

const PipeParser = P.lazy((): mixed => {
  const TupleParser = require('../collections/tuple').default
  const TernaryParser = require('../ternary').default
  const ProgramParser = require('../program').default
  return P.seq(
    P.alt(TernaryParser, TupleParser),
    P.regexp(/\s*\|\s*/),
    ProgramParser
  ).map((value: [NodeType, mixed, NodeType]): PipeNodeType => ({
    name: 'pipe',
    value: {
      left: value[0],
      right: value[2]
    }
  }))
})

export default PipeParser
