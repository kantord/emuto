// @flow

import P from 'parsimmon'
import type { IdentifierNodeType } from '../types'

export default P.regexp(/[a-zA-Z][0-9a-zA-Z_$]*/i)
  .chain((identifier: string): IdentifierNodeType => {
    const exceptions = ['null', 'false', 'true', 'if', 'each']
    if (exceptions.indexOf(identifier) < 0) {
      return P.of(identifier)
    } else {
      return P.fail(`identifier but got keyword ${identifier}`)
    }
  })
  .map((value: string): IdentifierNodeType => ({
    name: 'identifier',
    value
  }))
  .desc('identifier')
