import P from 'parsimmon'
import FunctionCallParser from './functionCall'
import Boolean3Parser from './operators/boolean3'

export default P.alt(Boolean3Parser, FunctionCallParser)
