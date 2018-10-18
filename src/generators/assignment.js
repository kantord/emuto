// @flow

import type {
  NodeType,
  AssignmentNodeType,
  GeneratedCodeType
} from '../types'

export default (
  Generator: NodeType => GeneratedCodeType
): (AssignmentNodeType => GeneratedCodeType) => ({
  value
}: AssignmentNodeType): GeneratedCodeType =>
  `((function() {_ = _.assign('${value.name.value}', (${Generator(
    value.value
  )}), _); return (${Generator(value.program)})})())`
