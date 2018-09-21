// @flow

import Parsimmon from 'parsimmon'

import type {ListCoreNodeType, NodeType} from '../types'

const ListCoreParser = Parsimmon.lazy(
  (): mixed => {
    const ValueParser = require('./value').default
    return Parsimmon.sepBy(ValueParser, Parsimmon.regexp(/\s*,\s*/)).map(
      (value: Array<NodeType>): ListCoreNodeType => ({
        type: 'listCore',
        value
      })
    )
  }
)

export default ListCoreParser
