// @flow

import type { TernaryNodeType, GeneratedCodeType } from '../types'

export default ({ value }: TernaryNodeType): GeneratedCodeType => {
  const Generator = require('./generator').default
  return `((${Generator(value.middle)}) ? (${Generator(
    value.left
  )}) : (${Generator(value.right)}))`
}
