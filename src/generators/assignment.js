// @flow

import withMapGenerator from './common/withMapGenerator';
import type {
  NodeType,
  AssignmentNodeType,
  GeneratedCodeType,
  AssignmentsType,
  AssignmentType,
} from '../types';

export default (
  Generator: NodeType => GeneratedCodeType,
): (AssignmentNodeType => GeneratedCodeType) => ({
  value,
}: AssignmentNodeType): GeneratedCodeType => {
  const compileOneAssignment = (
    assignment: AssignmentType,
  ): GeneratedCodeType =>
    `_ = _.assign('${assignment[0].value}', (${Generator(assignment[1])}), _)`;

  const compileAssignments = (
    assignments: AssignmentsType,
  ): GeneratedCodeType => assignments.map(compileOneAssignment).join('; ');

  return `((function() {${compileAssignments(
    value.assignments,
  )}; return (${withMapGenerator(Generator(value.program))})})())`;
};
