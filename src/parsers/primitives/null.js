// @flow

import Parsimmon from 'parsimmon'
import type { NodeType } from '../types'

export default Parsimmon.string('null').map((): NodeType => ({
  type: 'primitive',
  value: 'null'
}))
