import Parsimmon from 'parsimmon'
import ProjectionParser from './projection'
import ProjectableParser from './projectable'
import FunctionCallParser from './functionCall'
import FunctionCallLambdaParser from './functionCallLambda'

export default Parsimmon.alt(
  FunctionCallLambdaParser,
  FunctionCallParser,
  ProjectionParser,
  ProjectableParser
)
