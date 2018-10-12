// @flow

import P from 'parsimmon'

import OperandParser from './operand'
import BinaryOperatorParser from './abstract/binaryOperator'

export default BinaryOperatorParser(OperandParser, P.regexp(/[*/%]/))
