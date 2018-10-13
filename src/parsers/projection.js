// @flow

import P from 'parsimmon'
import crap from './crap'

import type {
  ListNodeType,
  ProjectionNodeType,
  ValuePropNodeType,
  ProjectableNodeType
} from '../types'

type WrappedProjectionNodeType =
  | {name: 'projection', value: ListNodeType}
  | {name: 'valueProp', value: string};

const packList = (x: ListNodeType): WrappedProjectionNodeType => ({
  value: x,
  name: 'projection'
})

const packProperty = (x: string): WrappedProjectionNodeType => ({
  value: x,
  name: 'valueProp'
})

const unpackOne = (
  projectable: ProjectableNodeType | ProjectionNodeType | ValuePropNodeType,
  projection: WrappedProjectionNodeType
): ProjectionNodeType | ValuePropNodeType | ProjectableNodeType =>
  projection.name === 'projection'
    ? {
      name: 'projection',
      value: {
        left: projectable,
        right: projection.value
      }
    }
    : projection.name === 'valueProp'
      ? {
        name: 'valueProp',
        value: {
          left: projectable,
          right: projection.value
        }
      }
      : projectable

const unpack = ([projectable, projections]: [
  ProjectableNodeType,
  Array<WrappedProjectionNodeType>
]): ProjectionNodeType | ValuePropNodeType | ProjectableNodeType =>
  projections.reduce(unpackOne, projectable)

const ProjectionParser = P.lazy((): mixed => {
  const ProjectableParser = require('./projectable').default
  const ListParser = require('./list').default.map(packList)
  const PropertyParser = P.regexp(/(\.[$A-Z_][0-9A-Z_$]*)+/i).map(packProperty)

  return P.seq(
    ProjectableParser.skip(crap),
    P.alt(ListParser, PropertyParser)
      .skip(crap)
      .atLeast(1)
  ).map(unpack)
})

export default ProjectionParser
