// @flow

import type { ValuePropNodeType, GeneratedCodeType, NodeType } from '../types'

export default (
  Generator: NodeType => GeneratedCodeType
): (ValuePropNodeType => GeneratedCodeType) => ({
  value
}: ValuePropNodeType): GeneratedCodeType =>
  value.optional
    ? `_.__opt__(${Generator(value.left)}, function(x) {return x${
      value.right
    }})`
    : `${Generator(value.left)}${value.right}`
