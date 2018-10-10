// @flow

import P from 'parsimmon'

import type {
  ListNodeType,
  ProjectionNodeType,
  ProjectableNodeType
} from '../types'

const unpackOne = (
  projectable: ProjectableNodeType | ProjectionNodeType,
  projection: ListNodeType
): ProjectionNodeType => ({
  name: 'projection',
  value: {
    left: projectable,
    right: projection
  }
})

const unpack = ([projectable, projections]: [
  ProjectableNodeType,
  Array<ListNodeType>
]): ProjectionNodeType | ProjectableNodeType =>
  projections.reduce(unpackOne, projectable)

const ProjectionParser = P.lazy((): mixed => {
  const ProjectableParser = require('./projectable').default
  const ListParser = require('./list').default
  return P.seq(
    ProjectableParser.skip(P.optWhitespace),
    ListParser.skip(P.optWhitespace).atLeast(1)
  ).map(unpack)
})

export default ProjectionParser
