// @flow

import P from 'parsimmon'
import IdentifierParser from './identifier'

import type { VariableNodeType } from '../types'

export default P.string('$')
  .then(IdentifierParser.atMost(1))
  .map((value: Array<{value: string}>): VariableNodeType => ({
    name: 'variable',
    value: value && value.length ? `$${value[0].value}` : '$'
  }))
  .desc('variable')
