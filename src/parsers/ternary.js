// @flow

import P from 'parsimmon'
import crap from './crap'

import type { TupleNodeType, TernaryNodeValueType, ParserType } from '../types'

export default P.lazy((): ParserType => {
  const TupleParser = require('./collections/tuple').default
  return P.seq(
    TupleParser,
    P.string('if')
      .trim(crap)
      .then(TupleParser),
    P.string('else')
      .trim(crap)
      .then(TupleParser)
  )
    .map(
      ([left, middle, right]: [
        TupleNodeType,
        TupleNodeType,
        TupleParser
      ]): TernaryNodeValueType => ({ left, middle, right })
    )
    .node('ternary')
    .desc('ternary')
})
