// @flow

import type { FunctionCallNodeType, GeneratedCodeType, NodeType } from '../types'

export default (
  Generator: NodeType => GeneratedCodeType
): (FunctionCallNodeType => GeneratedCodeType) => ({
  value
}: FunctionCallNodeType): GeneratedCodeType =>
  `_.${value.left.value}(${Generator(value.right)})(input)`
