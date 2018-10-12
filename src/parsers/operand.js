import P from 'parsimmon'
import ProjectionParser from './projection'
import ProjectableParser from './projectable'

export default P.alt(ProjectionParser, ProjectableParser)
