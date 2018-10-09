// @flow

import P from 'parsimmon'
import type { NodeType } from '../../types'

export default P.string('null').map((): NodeType => ({
  name: 'primitive',
  value: 'null'
}))
