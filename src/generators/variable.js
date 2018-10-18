// @flow

import type { VariableNodeType, GeneratedCodeType } from '../types'

export default ({ value }: VariableNodeType): GeneratedCodeType =>
  `_.get('${value.slice(1)}')`
