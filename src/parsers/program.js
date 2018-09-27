import Parsimmon from 'parsimmon'
import TupleParser from './tuple/tuple'
import PipeParser from './pipe/pipe'

export default Parsimmon.alt(PipeParser, TupleParser)
