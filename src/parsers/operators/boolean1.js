// @flow

import P from 'parsimmon'

import BinaryOperatorParser from '../abstract/binaryOperator'
import UnaryOperatorParser from './unaryOperator'

const MultiplicativeParser = BinaryOperatorParser(
  P.alt(UnaryOperatorParser),
  P.regexp(/[*/%]/),
  'multiplicative'
)

const AdditiveParser = BinaryOperatorParser(
  MultiplicativeParser,
  P.regexp(/[+-]/),
  'additive'
)
export default BinaryOperatorParser(
  AdditiveParser,
  P.regexp(/[<>]=?/),
  'boolean1'
)
