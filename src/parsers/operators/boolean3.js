// @flow

import P from 'parsimmon'

import Boolean2 from '../operators/boolean2'
import BinaryOperatorParser from '../abstract/binaryOperator'

export default BinaryOperatorParser(
  Boolean2,
  P.regexp(/(\|\||&&|or|and)/).map(
    (x: string): string => (x === 'or' ? '||' : x === 'and' ? '&&' : x)
  ),
  'boolean3'
)
