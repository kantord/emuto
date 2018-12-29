// @flow
/* eslint no-control-regex: 0 */
/* eslint no-useless-escape: 0 */

import P from 'parsimmon'
import type { NodeType } from '../types'

const KeywordParser = P.regex(/(null|true|false)/).map(
  (value: string): NodeType => ({
    name: 'primitive',
    value
  })
)

const StringParser = P.regexp(
  /("(((?=\\)\\(["\\\/bfnrt]|u[0-9a-fA-F]{4}))|[^"\\\0-\x1F\x7F]+)*")/
).map((value: string): NodeType => ({
  name: 'primitive',
  value
}))

const NumberParser = P.regexp(/(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/).map(
  (value: string): NodeType => ({
    name: 'primitive',
    value
  })
)

export default P.alt(KeywordParser, StringParser, NumberParser)
