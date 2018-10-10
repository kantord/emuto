// @flow

import P from 'parsimmon'

import type {
  ListNodeType,
  ProjectionNodeType,
  ValuePropNodeType,
  ProjectableNodeType
} from '../types'

type WrappedProjectionNodeType =
  | {name: 'projection', value: ListNodeType}
  | {name: 'valueProp', value: string};

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
  const ListParser = require('./list').default
  const PropertyParser = P.regexp(/(\.[$A-Z_][0-9A-Z_$]*)+/i)
  return P.seq(
    ProjectableParser.skip(P.optWhitespace),
    P.alt(
      ListParser.map((x: ListNodeType): WrappedProjectionNodeType => ({
        value: x,
        name: 'projection'
      })),
      PropertyParser.map((x: string): WrappedProjectionNodeType => ({
        value: x,
        name: 'valueProp'
      }))
    )
      .skip(P.optWhitespace)
      .atLeast(1)
  ).map(unpack)
})

export default ProjectionParser
