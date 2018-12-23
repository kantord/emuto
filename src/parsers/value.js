import P from 'parsimmon'

import PrimitiveParser from './primitive'
import InputPropParser from './inputProp'
import ListParser from './collections/list'
import ParenthesesParser from './parentheses'
import VariableParser from './variable'
import LambdaParser from './lambda'

export default P.alt(
  PrimitiveParser,
  InputPropParser,
  LambdaParser,
  VariableParser,
  ListParser,
  ParenthesesParser
)
