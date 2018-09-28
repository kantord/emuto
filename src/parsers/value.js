import Parsimmon from 'parsimmon'

import PrimitiveParser from './primitive'
import InputParser from './input'
import InputPropParser from './inputProp'
import ListParser from './list'

export default Parsimmon.alt(
  PrimitiveParser,
  InputPropParser,
  InputParser,
  ListParser
)
