// @flow

import P from 'parsimmon'
import crap from './crap'

import type { ListCoreNodeType, NodeType } from '../types'

const ListCoreParser = P.lazy((): mixed => {
  const TupleParser = require('./tuple/tuple').default
  return P.sepBy(TupleParser, P.string(',').trim(crap))
    .times(1)
    .map((value: Array<Array<NodeType>>): ListCoreNodeType => ({
      name: 'listCore',
      value: value
    }))
})

export default ListCoreParser
