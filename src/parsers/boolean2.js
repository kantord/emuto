// @flow

import P from 'parsimmon'

import Boolean1 from './boolean1'
import BinaryOperatorParser from './abstract/binaryOperator'

export default BinaryOperatorParser(
  Boolean1,
  P.regexp(/[=!]=/).map((x: string): string => x + '='),
  'boolean2'
)
