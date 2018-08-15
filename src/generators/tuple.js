// @flow

import primitive from './primitive'
import type {NodeType, GeneratedCodeType} from './types'

export default ({value}: NodeType): GeneratedCodeType =>
  (([left, right]: [NodeType]): GeneratedCodeType => `[${left},${right}]`)(
    value.map(primitive)
  )
