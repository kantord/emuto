import Parsimmon from 'parsimmon'
import ValueParser from './value'
import PipeParser from './pipe/pipe'

export default Parsimmon.alt(PipeParser, ValueParser)
