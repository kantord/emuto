// @flow
/* eslint no-control-regex: 0 */
/* eslint no-useless-escape: 0 */

import P from 'parsimmon'
import type { NodeType } from '../types'

const keywords = ['null', 'true', 'false']
const StringParserRegExp = /("(((?=\\)\\(["\\\/bfnrt]|u[0-9a-fA-F]{4}))|[^"\\\0-\x1F\x7F]+)*")/
const NumberParserRegExp = /(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/

const options = [
  ...keywords,
  StringParserRegExp.source,
  NumberParserRegExp.source
]

export default P.regex(new RegExp(`(${options.join('|')})`)).map(
  (value: string): NodeType => ({
    name: 'primitive',
    value
  })
)
