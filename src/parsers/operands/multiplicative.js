// @flow

import P from 'parsimmon'

import UnaryOperatorParser from './unaryOperator'
import OperandParser from '../operand'
import BinaryOperatorParser from '../abstract/binaryOperator'

export default BinaryOperatorParser(
  P.alt(OperandParser, UnaryOperatorParser),
  P.regexp(/[*/%]/),
  'multiplicative'
)
