import P from 'parsimmon'
import ProjectionParser from './projection'
import ProjectableParser from './projectable'
import FunctionCallParser from './functionCall'
import FunctionCallLambdaParser from './functionCallLambda'

export default P.alt(
  FunctionCallLambdaParser,
  FunctionCallParser,
  ProjectionParser,
  ProjectableParser
)
