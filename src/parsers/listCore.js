// @flow

import P from 'parsimmon'
import crap from './crap'

import type { ListCoreNodeType, NodeType } from '../types'

const ListCoreParser = P.lazy((): mixed => {
  const TupleParser = require('./tuple/tuple').default
  return P.sepBy(TupleParser, P.string(',').trim(crap)).map(
    (value: Array<NodeType>): ListCoreNodeType => ({
      name: 'listCore',
      value
    })
  )
})

export default ListCoreParser
