// @flow

import type { ObjectProjectionNodeType, GeneratedCodeType, NodeType, ObjectProjectionItemType } from '../types'

export default (
  Generator: NodeType => GeneratedCodeType
): (ObjectProjectionNodeType => GeneratedCodeType) => ({
  value
}: ObjectProjectionNodeType): GeneratedCodeType =>
  `_.__objectProjection__(${Generator(value.left)}, ${JSON.stringify(
    value.right.map(({ value }: ObjectProjectionItemType): string => value)
  )}, ${value.optional ? 'true' : 'false'})`
