// @flow

import P from 'parsimmon'

import type { ListCoreNodeType, NodeType } from '../types'

const ListCoreParser = P.lazy(
  (): mixed => {
    const TupleParser = require('./tuple/tuple').default
    return P.sepBy(TupleParser, P.regexp(/\s*,\s*/)).map(
      (value: Array<NodeType>): ListCoreNodeType => ({
        name: 'listCore',
        value
      })
    )
  }
)

export default ListCoreParser
