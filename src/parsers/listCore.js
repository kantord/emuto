// @flow

import P from 'parsimmon'
import crap from './crap'

import type {
  ListCoreNodeType,
  ListCoreValueType,
  TupleNodeType,
  NodeType
} from '../types'

const SeparatorParser = P.string(',').trim(crap)

const ListCoreLiteralParser = P.lazy((): mixed => {
  const TupleParser = require('./tuple/tuple').default
  const SpreadParser = P.string('...')
    .then(crap)
    .then(TupleParser)
    .node('spread')
  const SimpleListParser = P.sepBy(TupleParser, SeparatorParser).node(
    'simpleList'
  )
  return P.sepBy(P.alt(SpreadParser, SimpleListParser), SeparatorParser).map(
    (value: ListCoreValueType): ListCoreNodeType => ({
      name: 'listCore',
      value
    })
  )
})

const ComprehensionParser = P.lazy((): mixed => {
  const TupleParser = require('./tuple/tuple').default
  const ProgramParser = require('./program').default
  return P.seq(
    P.string('each')
      .then(crap)
      .then(TupleParser),
    crap.then(P.string('in')).then(crap.then(TupleParser)),
    crap.then(ProgramParser).atMost(1)
  ).map(
    ([left, middle, right]: [
      TupleNodeType,
      TupleNodeType,
      [NodeType]
    ]): ListCoreNodeType => {
      const mapPart = {
        name: 'functionCall',
        value: {
          left: {
            name: 'identifier',
            value: 'map'
          },
          right: {
            name: 'lambda',
            value: {
              variable: 'input',
              definition: left
            }
          }
        }
      }

      const extractionPart =
        right.length === 1
          ? {
            name: 'pipe',
            value: {
              left: middle,
              right: right[0]
            }
          }
          : middle

      return {
        name: 'listCore',
        value: [
          {
            name: 'spread',
            value: {
              name: 'parentheses',
              value: {
                name: 'pipe',
                value: {
                  left: extractionPart,
                  right: mapPart
                }
              }
            }
          }
        ]
      }
    }
  )
})

export default P.alt(ComprehensionParser, ListCoreLiteralParser)
