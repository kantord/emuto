// @flow

import type {ProjectionNodeType, GeneratedCodeType, NodeType} from '../types';

export default (
  Generator: NodeType => GeneratedCodeType,
): (ProjectionNodeType => GeneratedCodeType) => ({
  value,
}: ProjectionNodeType): GeneratedCodeType =>
  `_.__objectProjection__(${Generator(value.left)}, ${JSON.stringify(
    value.right,
  )}, ${value.optional ? 'true' : 'false'})`;
