// @flow

import P from 'parsimmon';

import type {ParenthesesNodeType, ParserType} from '../types';

export default P.lazy((): ParserType => {
  const ProgramParser = require('../program').default;
  const InfixFuncationCallParser = require('./infixFunctionCall').default;
  return P.seq(
    P.string('('),
    P.alt(InfixFuncationCallParser, ProgramParser),
    P.string(')'),
  )
    .map((value: [mixed, ParenthesesNodeType, mixed]): ParenthesesNodeType => ({
      name: 'parentheses',
      value: value[1],
    }))
    .desc('parentheses');
});
