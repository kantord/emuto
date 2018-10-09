import P from 'parsimmon'
import ValuePropParser from './valueProp'
import ValueParser from './value'
import ObjectParser from './object'

export default P.alt(
  ValuePropParser,
  P.alt(ObjectParser, ValueParser)
)
