// @flow

import P from 'parsimmon'

import BinaryOperatorParser from '../abstract/binaryOperator'
import UnaryOperatorParser from './unaryOperator'

import type { ParserType } from '../../types'

const processBoolean2 = (x: string): string => x + '='
const processBoolean3 = (x: string): string =>
  x === 'or' ? '||' : x === 'and' ? '&&' : x

const operatorPrecedenceTable = [
  ['unary', UnaryOperatorParser],
  ['multiplicative', P.regexp(/[*/%]/)],
  ['additive', P.regexp(/[+-]/)],
  ['boolean1', P.regexp(/[<>]=?/)],
  ['boolean2', P.regexp(/[=!]=/).map(processBoolean2)],
  ['boolean3', P.regexp(/(\|\||&&|or|and)/).map(processBoolean3)]
]

export default operatorPrecedenceTable
  .slice(1)
  .reduce(
    (
      ParentParser: ParserType,
      [parserDecription, Parser]: [string, ParserType]
    ): ParserType =>
      BinaryOperatorParser(ParentParser, Parser, parserDecription),
    operatorPrecedenceTable[0][1]
  )
