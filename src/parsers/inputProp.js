// @flow

import Parsimmon from 'parsimmon'
import type {InputPropNodeType} from '../types'

export default Parsimmon.regexp(/^\.[$A-Z_][0-9A-Z_$]*$/i).map(
  (value: string): InputPropNodeType => ({
    type: 'inputProp',
    value
  })
)
