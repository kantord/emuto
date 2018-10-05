// @flow

import Parsimmon from 'parsimmon'

import type { ListCoreNodeType, NodeType } from '../types'

const ListCoreParser = Parsimmon.lazy(
  (): mixed => {
    const TupleParser = require('./tuple/tuple').default
    return Parsimmon.sepBy(TupleParser, Parsimmon.regexp(/\s*,\s*/)).map(
      (value: Array<NodeType>): ListCoreNodeType => ({
        type: 'listCore',
        value
      })
    )
  }
)

export default ListCoreParser
