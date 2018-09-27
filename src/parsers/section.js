import Parsimmon from 'parsimmon'
import ValuePropParser from './valueProp'
import ValueParser from './value'
import TupleParser from './tuple/tuple'

export default Parsimmon.alt(ValuePropParser, Parsimmon.alt(TupleParser, ValueParser))
