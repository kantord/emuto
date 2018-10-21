// @flow

import P from 'parsimmon'
import IdentifierParser from './identifier'

import type { VariableNodeType, InputNodeType } from '../types'

export default P.string('$')
  .then(IdentifierParser.atMost(1))
  .map(
    (value: Array<{value: string}>): VariableNodeType | InputNodeType =>
      value && value.length
        ? { name: 'variable', value: `$${value[0].value}` }
        : { name: 'input', value: '$' }
  )
