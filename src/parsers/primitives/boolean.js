// @flow

import type { NodeType } from '../../types'
import P from 'parsimmon'

const TrueParser = P.string('true')
const FalseParser = P.string('false')

export default P.alt(TrueParser, FalseParser).map(
  (value: string): NodeType => ({
    type: 'primitive',
    value
  })
)
