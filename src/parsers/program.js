// @flow

import P from 'parsimmon'
import TupleParser from './collections/tuple'
import PipeParser from './pipe/pipe'
import TernaryParser from './ternary'
import AssignmentParser from './assignment'
import type { NodeType } from '../types'
import crap from './crap'

export default P.alt(AssignmentParser, PipeParser, TernaryParser, TupleParser)
  .trim(crap)
  .map((value: NodeType): NodeType => value)
