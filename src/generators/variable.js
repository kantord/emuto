// @flow

import type { VariableNodeType, GeneratedCodeType } from '../types'

export default ({ value }: VariableNodeType): GeneratedCodeType =>
  value === '$' ? 'input' : `_.get('${value.slice(1)}')`
