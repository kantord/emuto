import P from 'parsimmon'
import FunctionCallParser from './functionCall'
import FunctionCallLambdaParser from './functionCallLambda'
import Boolean3Parser from './boolean3'

export default P.alt(
  FunctionCallLambdaParser,
  FunctionCallParser,
  Boolean3Parser
)
