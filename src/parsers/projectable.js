import P from 'parsimmon'
import ObjectParser from './collections/object'
import PrimitiveParser from './primitive'
import InputPropParser from './inputProp'
import ListParser from './collections/list'
import VariableParser from './variable'
import LambdaParser from './lambda'
import ParenthesesParser from './parentheses'

export default P.alt(
  ParenthesesParser,
  ObjectParser,
  PrimitiveParser,
  InputPropParser,
  LambdaParser,
  VariableParser,
  ListParser
)
