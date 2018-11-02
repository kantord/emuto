// @flow

import P from 'parsimmon'

import Boolean2 from './boolean2'
import BinaryOperatorParser from './abstract/binaryOperator'

export default BinaryOperatorParser(
  Boolean2,
  P.regexp(/(\|\||&&|or|and)/).map(
    (x: string): string => (x === 'or' ? '||' : x === 'and' ? '&&' : x)
  ),
  'boolean3'
)
