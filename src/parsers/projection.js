// @flow

import P from 'parsimmon'

import type { ProjectionNodeType, NodeType, ListNodeType } from '../types'

const ProjectionParser = P.lazy((): mixed => {
  const ProjectableParser = require('./projectable').default
  const ListParser = require('./list').default
  return P.seq(
    ProjectableParser,
    P.optWhitespace,
    ListParser
  ).map(
    ([left, _, right]: [
      NodeType,
      mixed,
      ListNodeType
    ]): ProjectionNodeType => ({
      name: 'projection',
      value: {
        left,
        right
      }
    })
  )
})

export default ProjectionParser
