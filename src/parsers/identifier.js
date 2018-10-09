// @flow

import P from 'parsimmon'
import type { IdentifierNodeType } from '../types'

export default P.regexp(/[a-zA-Z][0-9a-zA-Z_$]*/).map(
  (value: string): IdentifierNodeType => ({
    type: 'identifier',
    value
  })
)
