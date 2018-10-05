// @flow

import type { NodeType } from '../../types'
import Parsimmon from 'parsimmon'

const TrueParser = Parsimmon.string('true')
const FalseParser = Parsimmon.string('false')

export default Parsimmon.alt(TrueParser, FalseParser).map(
  (value: string): NodeType => ({
    type: 'primitive',
    value
  })
)
