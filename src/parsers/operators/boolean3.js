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

const Boolean1 = BinaryOperatorParser(
  AdditiveParser,
  P.regexp(/[<>]=?/),
  'boolean1'
)
const Boolean2 = BinaryOperatorParser(
  Boolean1,
  P.regexp(/[=!]=/).map((x: string): string => x + '='),
  'boolean2'
)

export default BinaryOperatorParser(
  Boolean2,
  P.regexp(/(\|\||&&|or|and)/).map(
    (x: string): string => (x === 'or' ? '||' : x === 'and' ? '&&' : x)
  ),
  'boolean3'
)
