// @flow

import type { PipeNodeType, GeneratedCodeType, NodeType } from '../types'

export default ({ value }: PipeNodeType): GeneratedCodeType => {
  const Generator = require('./generator').default
  const compiledHead = Generator(value[0])
  if (value.length === 1) return compiledHead
  return value
    .slice(1)
    .reduce(
      (compiledLeft: GeneratedCodeType, right: NodeType): GeneratedCodeType => {
        const compiledRight = Generator(right)
        return `(function (input) {return ${compiledRight}})(${compiledLeft})`
      },
      compiledHead
    )
}
