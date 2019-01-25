// @flow

import type { TernaryNodeType, GeneratedCodeType } from '../types'

export default ({ value }: TernaryNodeType): GeneratedCodeType => {
  const Generator = require('./generator').default
  return `(_.__ternary__((${Generator(
    value.middle
  )}),function(){return(${Generator(
    value.left
  )})},function(){return(${Generator(value.right)})}))`
}
