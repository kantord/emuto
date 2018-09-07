import Parsimmon from 'parsimmon'

import PrimitiveParser from './primitive'
import TupleParser from './tuple/tuple'
import InputParser from './input'

export default Parsimmon.alt(PrimitiveParser, TupleParser, InputParser)
