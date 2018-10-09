// @flow
/* eslint no-control-regex: 0 */
/* eslint no-useless-escape: 0 */

import P from 'parsimmon'
import type { NodeType } from '../../types'

export default P.regexp(
  /("(((?=\\)\\(["\\\/bfnrt]|u[0-9a-fA-F]{4}))|[^"\\\0-\x1F\x7F]+)*")/
).map((value: string): NodeType => ({
  name: 'primitive',
  value
}))
