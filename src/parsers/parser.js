import Parsimmon from 'parsimmon'

import PrimitiveParser from './primitive'
import TupleParser from './tuple/tuple'
import InputParser from './input'
import InputPropParser from './inputProp'

export default Parsimmon.alt(
  PrimitiveParser,
  TupleParser,
  InputPropParser,
  InputParser
)
