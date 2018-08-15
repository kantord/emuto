import Parsimmon from 'parsimmon'

import PrimitiveParser from './primitive'
import TupleParser from './tuple/tuple'

export default Parsimmon.alt(PrimitiveParser, TupleParser)
