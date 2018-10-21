// @flow

import P from 'parsimmon'
import IdentifierParser from './identifier'

import type { VariableNodeType } from '../types'

export default P.string('$')
  .then(IdentifierParser.atMost(1))
  .map(
    (value: Array<{value: string}>): VariableNodeType =>
      value && value.length
        ? { name: 'variable', value: `$${value[0].value}` }
        : { name: 'variable', value: '$' }
  )
