// @flow

import type { NodeType } from '../../types'
import P from 'parsimmon'

export default P.regex(/(null|true|false)/).map((value: string): NodeType => ({
  name: 'primitive',
  value
}))
