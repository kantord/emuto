import P from 'parsimmon'

import PrimitiveParser from './primitive'
import InputParser from './input'
import InputPropParser from './inputProp'
import ListParser from './list'
import ParenthesesParser from './parentheses'

export default P.alt(
  PrimitiveParser,
  InputPropParser,
  InputParser,
  ListParser,
  ParenthesesParser
)
