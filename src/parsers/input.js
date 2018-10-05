// @flow

import Parsimmon from 'parsimmon'
import type { InputNodeType } from '../types'

export default Parsimmon.string('$').map(
  (): InputNodeType => ({
    type: 'input',
    value: '$'
  })
)
