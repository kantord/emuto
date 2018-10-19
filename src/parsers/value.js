import P from 'parsimmon'

import PrimitiveParser from './primitive'
import InputParser from './input'
import InputPropParser from './inputProp'
import ListParser from './list'
import ParenthesesParser from './parentheses'
import VariableParser from './variable'
import LambdaParser from './lambda'

export default P.alt(
  PrimitiveParser,
  InputPropParser,
  VariableParser,
  LambdaParser,
  InputParser,
  ListParser,
  ParenthesesParser
)
