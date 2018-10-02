import Parsimmon from 'parsimmon'
import ProjectionParser from './projection'
import ProjectableParser from './projectable'

export default Parsimmon.alt(ProjectionParser, ProjectableParser)
