import P from 'parsimmon'
import FunctionCallParser from './functionCall'
import Boolean3Parser from './operands/boolean3'

export default P.alt(
  FunctionCallParser,
  Boolean3Parser
)
