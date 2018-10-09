// @flow

import P from 'parsimmon'
import type { InputPropNodeType } from '../types'

export default P.regexp(/\.[$A-Z_][0-9A-Z_$]*/i).map(
  (value: string): InputPropNodeType => ({
    type: 'inputProp',
    value
  })
)
