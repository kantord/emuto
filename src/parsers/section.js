import Parsimmon from 'parsimmon'
import ValuePropParser from './valueProp'
import ValueParser from './value'

export default Parsimmon.alt(ValuePropParser, ValueParser)
