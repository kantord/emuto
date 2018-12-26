// @flow

import P from 'parsimmon'
import UnaryOperatorParser from './unaryOperator'
import crap from '../crap'

export default P.lazy(() => {
  const FunctionCallParser = require('../functionCall').default
  const InfixFuncationCallParser = P.seq(
    UnaryOperatorParser,
    crap.then(FunctionCallParser).atMost(1)
  ).map(([left, right]) => ({
    name: 'parentheses',
    value: {
      name: 'pipe',
      value: {
        left,
        right: right[0]
      }
    }
  }))

  return P.alt(
    UnaryOperatorParser,
    InfixFuncationCallParser.wrap(P.string('('), P.string(')'))
  )
})
