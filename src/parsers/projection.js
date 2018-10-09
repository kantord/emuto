// @flow

import P from 'parsimmon'

import type { NodeType, ListNodeType } from '../types'

const ProjectionParser = P.lazy((): mixed => {
  const ProjectableParser = require('./projectable').default
  const ListParser = require('./list').default
  return P.seq(ProjectableParser.skip(P.optWhitespace), ListParser)
    .map(([left, right]: [NodeType, ListNodeType]): {
      left: NodeType,
      right: ListNodeType
    } => ({
      left,
      right
    }))
    .node('projection')
})

export default ProjectionParser
