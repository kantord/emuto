// @flow

import P from 'parsimmon'

import AdditiveParser from './additive'
import BinaryOperatorParser from './abstract/binaryOperator'

export default BinaryOperatorParser(AdditiveParser, P.regexp(/[<>]=?/))
