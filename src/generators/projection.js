// @flow

import type { ProjectionNodeType, GeneratedCodeType, NodeType } from '../types'

export default (
  Generator: NodeType => GeneratedCodeType
): (ProjectionNodeType => GeneratedCodeType) => ({
  value
}: ProjectionNodeType): GeneratedCodeType =>
  `_.projection(${Generator(value.left)}, ${Generator(value.right)}, ${
    value.optional ? 'true' : 'false'
  })`
