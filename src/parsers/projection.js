// @flow

import P from 'parsimmon'
import crap from './crap'
import { StringParserRegExp } from './primitive'
import IdentifierParser from './identifier'

import type {
  ListNodeType,
  ProjectionNodeType,
  ObjectProjectionNodeType,
  ValuePropNodeType,
  ProjectableNodeType,
  NodeType
} from '../types'

type WrappedProjectionNodeType =
  | {name: 'projection', value: ListNodeType}
  | {name: 'valueProp', value: string}
  | {name: 'objectProjection', value: Array<string>};

type WrappedProjectionNodeWithOptionalType =
  | {
      name: 'projection',
      value: {name: 'projection', value: ListNodeType},
      optional: boolean
    }
  | {name: 'valueProp', value: string, optional: boolean}
  | {name: 'objectProjection', value: Array<string>, optional: boolean};

const packList = (x: ListNodeType): WrappedProjectionNodeType => ({
  value: x,
  name: 'projection'
})

const packProperty = (x: string): WrappedProjectionNodeType => ({
  value: x,
  name: 'valueProp'
})

const unpackOne = (
  projectable: ProjectableNodeType | ProjectionNodeType | ValuePropNodeType | ObjectProjectionNodeType,
  projection: WrappedProjectionNodeWithOptionalType
): | ProjectionNodeType
  | ValuePropNodeType
  | ProjectableNodeType
  | ObjectProjectionNodeType => {
  switch (projection.name) {
    case 'projection':
      return {
        name: 'projection',
        value: {
          optional: projection.optional,
          left: projectable,
          right: projection.value.value
        }
      }
    case 'valueProp':
      return {
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
    default :
      return {
        name: 'objectProjection',
        value: {
          left: projectable,
          optional: false,
          right: projection.value
        }
      }
  }
}

const unpack = ([projectable, projections]: [
  ProjectableNodeType,
  Array<WrappedProjectionNodeWithOptionalType>
]): ProjectionNodeType | ValuePropNodeType | ProjectableNodeType | ObjectProjectionNodeType =>
  projections.reduce(unpackOne, projectable)

const ProjectionParser = P.lazy((): mixed => {
  const ProjectableParser = require('./projectable').default
  const ListParser = require('./collections/list').default.map(packList)
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

  const ObjectProjectionParser = P.sepBy(
    P.alt(
      P.regex(StringParserRegExp).map((value: string): string => value.slice(1, -1)),
      IdentifierParser.map(({ value }: {value: string}): string => value)
    ),
    P.string(',')
      .atMost(1)
      .trim(crap)
  )
    .wrap(P.string('{').then(crap), crap.then(P.string('}')))
    .map((value: Array<string>): WrappedProjectionNodeType => ({
      name: 'objectProjection',
      value
    }))

  return P.seq(
    ProjectableParser.skip(crap),
    P.alt(ProjectionParser, PropertyParser, ObjectProjectionParser)
      .skip(crap)
      .many()
  )
    .map(
      ([left, right]: [
        ProjectableNodeType,
        Array<WrappedProjectionNodeWithOptionalType>
      ]): NodeType => (right.length === 0 ? left : unpack([left, right]))
    )
    .desc('projection')
})

export default ProjectionParser
