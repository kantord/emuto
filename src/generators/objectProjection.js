// @flow

import type { ObjectProjectionNodeType, GeneratedCodeType, NodeType } from '../types'

export default (
  Generator: NodeType => GeneratedCodeType
): (ObjectProjectionNodeType => GeneratedCodeType) => ({
  value
}: ObjectProjectionNodeType): GeneratedCodeType =>
  `_.__objectProjection__(${Generator(value.left)}, ${JSON.stringify(
    value.right)}, ${value.optional ? 'true' : 'false'}, _)`
