import Parsimmon from 'parsimmon'
import SectionParser from './section'
import PipeParser from './pipe/pipe'

export default Parsimmon.alt(PipeParser, SectionParser)
