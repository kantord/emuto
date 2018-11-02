// @flow

import P from 'parsimmon'
import TupleParser from './tuple/tuple'
import PipeParser from './pipe/pipe'
import TernaryParser from './ternary'
import AssignmentParser from './assignment'
import type { NodeType } from '../types'
import crap from './crap'

export default P.seq(
  crap,
  P.alt(AssignmentParser, PipeParser, P.alt(TernaryParser, TupleParser)),
  crap
).map((value: [mixed, NodeType, mixed]): NodeType => value[1])
