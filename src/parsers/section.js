import P from 'parsimmon'
import FunctionCallParser from './functionCall'
import FunctionCallLambdaParser from './functionCallLambda'
import AdditiveParser from './additive'

export default P.alt(
  FunctionCallLambdaParser,
  FunctionCallParser,
  AdditiveParser
)
