// @flow
/* eslint no-control-regex: 0 */
/* eslint no-useless-escape: 0 */

import P from 'parsimmon'
import type { NodeType } from '../types'

const keywords = ['null', 'true', 'false']
const DoubleQuoteStringRegexp = /("(((?=\\)\\(["'\\\/bfnrt]|u[0-9a-fA-F]{4}))|[^"\\\0-\x1F\x7F]+)*")/
const SingleQuoteStringRegexp = /('(((?=\\)\\(['"\\\/bfnrt]|u[0-9a-fA-F]{4}))|[^'\\\0-\x1F\x7F]+)*')/
export const StringParserRegExp = new RegExp(
  `(${DoubleQuoteStringRegexp.source}|${SingleQuoteStringRegexp.source})`
)
const NumberParser = P.regex(
  /(?:0|[1-9](?:[\d_]*\d)|\d)(?:\.\d+)?(?:[eE][+-]?\d+)?/
).map((text: string): string => text.replace('_', ''))

const options = [...keywords, StringParserRegExp.source]

export default P.alt(
  P.regex(new RegExp(`(${options.join('|')})`)),
  NumberParser
).map(
  (value: string): NodeType => ({
    name: 'primitive',
    value
  })
)
