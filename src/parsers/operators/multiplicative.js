// @flow

import P from 'parsimmon'

import UnaryOperatorParser from './unaryOperator'
import BinaryOperatorParser from '../abstract/binaryOperator'

export default BinaryOperatorParser(
  P.alt(UnaryOperatorParser),
  P.regexp(/[*/%]/),
  'multiplicative'
)
