// @flow

import P from 'parsimmon'

import BinaryOperatorParser from '../abstract/binaryOperator'
import UnaryOperatorParser from './unaryOperator'

const MultiplicativeParser = BinaryOperatorParser(
  P.alt(UnaryOperatorParser),
  P.regexp(/[*/%]/),
  'multiplicative'
)

export default BinaryOperatorParser(
  MultiplicativeParser,
  P.regexp(/[+-]/),
  'additive'
)
