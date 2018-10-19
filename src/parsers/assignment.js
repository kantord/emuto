// @flow

import P from 'parsimmon'
import SectionParser from './section'
import IdentifierParser from './identifier'
import TupleParser from './tuple/tuple'
import crap from './crap'

import type {
  NodeType,
  AssignmentNodeValueType,
  AssignmentsType
} from '../types'

const Assignment = P.seq(
  P.string('$').then(IdentifierParser),
  P.string('=')
    .trim(crap)
    .then(SectionParser)
)

const Assignments = P.sepBy(Assignment, crap)

export default P.seq(
  TupleParser,
  P.string('where')
    .trim(crap)
    .then(Assignments)
)
  .map(
    ([program, assignments]: [
      NodeType,
      AssignmentsType
    ]): AssignmentNodeValueType => ({
      program,
      assignments
    })
  )
  .node('assignment')
