// @flow

import P from 'parsimmon'
import crap from './crap'

import type { ListCoreNodeType, ListCoreValueType } from '../types'

const SeparatorParser = P.string(',').trim(crap)

const ListCoreParser = P.lazy((): mixed => {
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

export default ListCoreParser
