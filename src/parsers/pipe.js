// @flow

import P from 'parsimmon'

import type { NodeType } from '../types'

const PipeParser = P.lazy((): mixed => {
  const TernaryParser = require('./ternary').default
  return TernaryParser.sepBy1(P.regexp(/\s*\|\s*/)).map(
    (value: Array<NodeType>): NodeType => ({
      name: 'pipe',
      value
    })
  )
})

export default PipeParser
