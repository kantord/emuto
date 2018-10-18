import P from 'parsimmon'

import PrimitiveParser from './primitive'
import InputParser from './input'
import InputPropParser from './inputProp'
import ListParser from './list'
import ParenthesesParser from './parentheses'
import VariableParser from './variable'

export default P.alt(
  PrimitiveParser,
  InputPropParser,
  VariableParser,
  InputParser,
  ListParser,
  ParenthesesParser
)
