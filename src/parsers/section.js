import Parsimmon from 'parsimmon'
import ValuePropParser from './valueProp'
import ValueParser from './value'
import ObjectParser from './object'

export default Parsimmon.alt(
  ValuePropParser,
  Parsimmon.alt(ObjectParser, ValueParser)
)
