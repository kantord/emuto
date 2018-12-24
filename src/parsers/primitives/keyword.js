// @flow

import type { NodeType } from '../../types'
import P from 'parsimmon'

const TrueParser = P.string('true')
const FalseParser = P.string('false')
const NullParser = P.string('null')

export default P.alt(TrueParser, FalseParser, NullParser).map(
  (value: string): NodeType => ({
    name: 'primitive',
    value
  })
)
