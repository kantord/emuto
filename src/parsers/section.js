import P from 'parsimmon'
import FunctionCallParser from './functionCall'
import FunctionCallLambdaParser from './functionCallLambda'
import Boolean2Parser from './boolean2'

export default P.alt(
  FunctionCallLambdaParser,
  FunctionCallParser,
  Boolean2Parser
)
