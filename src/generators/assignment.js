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
    `_ = _.assign('${assignment[0].value}', (${Generator(assignment[1])}), _)`

  const compileAssignments = (
    assignments: AssignmentsType
  ): GeneratedCodeType => assignments.map(compileOneAssignment).join('; ')

  const withMapGenerator = x =>
    `function(inputs) {return _.__map_generator__(inputs, (function(input) { return ${x}}))}`

  return `((function() {${compileAssignments(
    value.assignments
  )}; return (${withMapGenerator(Generator(value.program))})})())`
}
