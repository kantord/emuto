// @flow

import Parsimmon from 'parsimmon'

import type {ProjectionNodeType, NodeType, ListNodeType} from '../types'

const ProjectionParser = Parsimmon.lazy((): mixed => {
  const ProjectableParser = require('./projectable').default
  const ListParser = require('./list').default
  return Parsimmon.seq(
    ProjectableParser,
    Parsimmon.optWhitespace,
    ListParser
  ).map(
    ([left, _, right]: [
      NodeType,
      mixed,
      ListNodeType
    ]): ProjectionNodeType => ({
      type: 'projection',
      value: {
        left,
        right
      }
    })
  )
})

export default ProjectionParser
