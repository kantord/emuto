// @flow

import type { TupleNodeType, GeneratedCodeType } from '../types'

export default ({ value }: TupleNodeType): GeneratedCodeType => {
  const Generator = require('./generator').default
  return (([left, right]: Array<string>): GeneratedCodeType =>
    `[${left},${right}]`)(value.map(Generator))
}
