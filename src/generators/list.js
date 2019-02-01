// @flow

import type {
  ListNodeType,
  GeneratedCodeType,
  NodeType,
  CollectionCoreValueType,
  CollectionCoreSegmentType,
  SimpleListSegmentType,
} from '../types';

const CompileListSegmentItem = (item: NodeType): GeneratedCodeType => {
  const Generator = require('./generator').default;
  return `_.__first__(${Generator(item)})`;
};

const CompileSimpleListSegment = (
  segment: SimpleListSegmentType,
): GeneratedCodeType =>
  `[${segment.value.map(CompileListSegmentItem).join(', ')}]`;

const CompileListSegment = (
  segment: CollectionCoreSegmentType,
): GeneratedCodeType =>
  segment.name === 'simpleList'
    ? CompileSimpleListSegment(segment)
    : CompileListSegmentItem(segment.value);

const CompileListSegments = (
  segments: CollectionCoreValueType,
): GeneratedCodeType =>
  segments.reduce(
    (a: GeneratedCodeType, b: CollectionCoreSegmentType): GeneratedCodeType =>
      `${a}.concat(_.__spread__(${CompileListSegment(b)}))`,
    '',
  );

export default ({value}: ListNodeType): GeneratedCodeType =>
  `_.__primitive__(Array.from(${CompileListSegment(
    value[0],
  )}${CompileListSegments(value.slice(1))}))`;
