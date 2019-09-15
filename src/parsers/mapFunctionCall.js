// @flow

import P from 'parsimmon'
import crap from './crap'

import type { FunctionCallNodeType, NodeType } from '../types'

const FunctionCallParser = P.lazy((): mixed => {
  const TupleParser = require('./collections/tuple').default
  return P.string('~')
    .then(crap)
    .then(TupleParser)
    .map((definition: NodeType): FunctionCallNodeType => ({
      name: 'functionCall',
      value: {
        left: {
          name: 'identifier',
          value: 'map'
        },
        right: {
          name: 'lambda',
          value: {
            variable: 'input',
            definition
          }
        }
      }
    }))
})

export default FunctionCallParser
