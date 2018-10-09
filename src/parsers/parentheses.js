// @flow

import P from 'parsimmon'

import type { ParenthesesNodeType, ParserType } from '../types'

export default P.lazy((): ParserType => {
  const ProgramParser = require('./program').default
  return P.seq(
    P.string('('),
    ProgramParser,
    P.string(')')
  ).map((value: [mixed, ParenthesesNodeType, mixed]): ParenthesesNodeType => ({
    type: 'parentheses',
    value: value[1]
  }))
})
