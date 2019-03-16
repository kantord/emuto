// @flow

import type {
  NodeType,
  AssignmentNodeType,
  GeneratedCodeType,
  AssignmentsType,
  AssignmentType
} from '../types'

export default (
  Generator: NodeType => GeneratedCodeType
): (AssignmentNodeType => GeneratedCodeType) => ({
  value
}: AssignmentNodeType): GeneratedCodeType => {
  const compileOneAssignment = (
    assignment: AssignmentType
  ): GeneratedCodeType =>
    `_ = _.__assign__('${assignment[0].value}', (${Generator(
      assignment[1]
    )}), _)`

  const compileAssignments = (
    assignments: AssignmentsType
  ): GeneratedCodeType => assignments.map(compileOneAssignment).join('; ')

  return `((function() {${compileAssignments(
    value.assignments
  )}; return (${Generator(value.program)})})())`
}
