// @flow

import P from 'parsimmon'
import type { IdentifierNodeType } from '../types'

export default P.regexp(
  /((?!null|false|true|if)[a-zA-Z][0-9a-zA-Z_$]*|(null|false|true|if)[0-9a-zA-Z_$])/
)
  .map((value: string): IdentifierNodeType => ({
    name: 'identifier',
    value
  }))
  .desc('identifier')
