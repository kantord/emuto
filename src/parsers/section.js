import P from 'parsimmon'
import FunctionCallParser from './functionCall'
import MathParser from './math/math'

export default P.alt(MathParser, FunctionCallParser)
