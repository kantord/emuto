// @flow

import type {
  ListNodeType,
  GeneratedCodeType,
  NodeType,
  ListCoreValueType,
  ListCoreSegmentType,
  SimpleListSegmentType
} from '../types'

const CompileListSegmentItem = (item: NodeType): GeneratedCodeType => {
  const Generator = require('./generator').default
  return Generator(item)
}

const CompileSimpleListSegment = (segment: SimpleListSegmentType): GeneratedCodeType =>
  `[${segment.value.map(CompileListSegmentItem).join(', ')}]`

const CompileListSegment = (segment: ListCoreSegmentType): GeneratedCodeType =>
  segment.name === 'simpleList'
    ? CompileSimpleListSegment(segment)
    : CompileListSegmentItem(segment.value)

const CompileListSegments = (segments: ListCoreValueType): GeneratedCodeType =>
  segments.reduce(
    (a: GeneratedCodeType, b: ListCoreSegmentType): GeneratedCodeType =>
      `${a}.concat(${CompileListSegment(b)})`,
    ''
  )

export default ({ value }: ListNodeType): GeneratedCodeType =>
  `${CompileListSegment(value[0])}${CompileListSegments(value.slice(1))}`
