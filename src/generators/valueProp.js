// @flow

import type { ValuePropNodeType, GeneratedCodeType, NodeType } from '../types'

export default (
  Generator: NodeType => GeneratedCodeType
): (ValuePropNodeType => GeneratedCodeType) => ({
  value
}: ValuePropNodeType): GeneratedCodeType =>
  `${Generator(value.left)}${value.right}`
