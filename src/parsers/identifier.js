// @flow

import P from 'parsimmon'
import type { IdentifierNodeType } from '../types'

export default P.regexp(
  /((?!null|false|true)[a-zA-Z][0-9a-zA-Z_$]*|(null|false|true)[0-9a-zA-Z_$])/
)
  .map((value: string): IdentifierNodeType => ({
    name: 'identifier',
    value
  }))
  .desc('identifier')
