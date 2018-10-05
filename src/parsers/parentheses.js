// @flow

import Parsimmon from 'parsimmon'

import type { ParenthesesNodeType, ParserType } from '../types'

export default Parsimmon.lazy((): ParserType => {
  const ProgramParser = require('./program').default
  return Parsimmon.seq(
    Parsimmon.string('('),
    ProgramParser,
    Parsimmon.string(')')
  ).map((value: [mixed, ParenthesesNodeType, mixed]): ParenthesesNodeType => ({
    type: 'parentheses',
    value: value[1]
  }))
})
