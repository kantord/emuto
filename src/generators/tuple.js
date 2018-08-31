// @flow

import primitive from './primitive'
import type {TupleNodeType, GeneratedCodeType} from '../types'

export default ({value}: TupleNodeType): GeneratedCodeType =>
  (([left, right]: Array<string>): GeneratedCodeType => `[${left},${right}]`)(
    value.map(primitive)
  )
