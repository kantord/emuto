// @flow

import P from 'parsimmon'
import type { InputNodeType } from '../types'

export default P.string('$').map(
  (): InputNodeType => ({
    type: 'input',
    value: '$'
  })
)
