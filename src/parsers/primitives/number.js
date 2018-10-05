// @flow

import Parsimmon from 'parsimmon'
import type { NodeType } from '../../types'

export default Parsimmon.regexp(
  /-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/
).map((value: string): NodeType => ({
  type: 'primitive',
  value
}))
