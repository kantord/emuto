// @flow

import P from 'parsimmon'

import MultiplicativeParser from './multiplicative'
import BinaryOperatorParser from './abstract/binaryOperator'

export default BinaryOperatorParser(MultiplicativeParser, P.regexp(/[+-]/))
