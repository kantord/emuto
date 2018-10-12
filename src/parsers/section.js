import P from 'parsimmon'
import FunctionCallParser from './functionCall'
import FunctionCallLambdaParser from './functionCallLambda'
import MultiplicativeParser from './multiplicative'

export default P.alt(
  FunctionCallLambdaParser,
  FunctionCallParser,
  MultiplicativeParser
)
