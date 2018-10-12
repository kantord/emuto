import P from 'parsimmon'
import FunctionCallParser from './functionCall'
import FunctionCallLambdaParser from './functionCallLambda'
import Boolean1Parser from './boolean1'

export default P.alt(
  FunctionCallLambdaParser,
  FunctionCallParser,
  Boolean1Parser
)
