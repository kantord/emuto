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

type WrappedProjectionNodeWithOptionalType =
  | {
      name: 'projection',
      value: {name: 'projection', value: ListNodeType},
      optional: boolean
    }
  | {name: 'valueProp', value: string, optional: boolean};

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
  projection: WrappedProjectionNodeWithOptionalType
): ProjectionNodeType | ValuePropNodeType | ProjectableNodeType =>
  projection.name === 'projection'
    ? {
      name: 'projection',
      value: {
        optional: projection.optional,
        left: projectable,
        right: projection.value.value
      }
    }
    : projection.name === 'valueProp'
      ? {
        name: 'valueProp',
        value: {
          optional: projection.value[0] === '?',
          left: projectable,
          right:
              projection.value[0] === '?'
                ? projection.value.slice(1)
                : projection.value
        }
      }
      : projectable

const unpack = ([projectable, projections]: [
  ProjectableNodeType,
  Array<WrappedProjectionNodeWithOptionalType>
]): ProjectionNodeType | ValuePropNodeType | ProjectableNodeType =>
  projections.reduce(unpackOne, projectable)

const ProjectionParser = P.lazy((): mixed => {
  const ProjectableParser = require('./projectable').default
  const ListParser = require('./list').default.map(packList)
  const ProjectionParser = P.seq(P.string('?').atMost(1), ListParser).map(
    ([optional, value]: [
      [] | [mixed],
      ListNodeType
    ]): WrappedProjectionNodeType => ({
      name: 'projection',
      optional: optional.length === 1,
      value: value
    })
  )
  const PropertyParser = P.regexp(/\??(\.[$A-Z_][0-9A-Z_$]*)+/i).map(
    packProperty
  )

  return P.seq(
    ProjectableParser.skip(crap),
    P.alt(ProjectionParser, PropertyParser)
      .skip(crap)
      .atLeast(1)
  ).map(unpack)
})

export default ProjectionParser
