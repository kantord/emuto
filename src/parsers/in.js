// @flow

import P from 'parsimmon'
import crap from './crap'

import type { TupleNodeType, PrimitiveNodeType } from '../types'

import StringParser from './primitives/string'
import ObjectParser from './object'

export default P.seq(
  StringParser.trim(crap),
  P.regexp(/\s*in\s*/).trim(crap),
  ObjectParser.trim(crap).map(
    // $FlowFixMe
    (found: mixed): [TupleNodeType] => found.value[0].value
  )
)
  .map(([key, _, props]: [PrimitiveNodeType, mixed, [TupleNodeType]]): boolean => {
    const niddle = String(key.value)

    for (const item of props) {
      const propName = item.value[0].value
      if (niddle === propName) {
        return true
      }
    }

    return false
  })
  .node('in')
