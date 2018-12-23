// @flow

import P from 'parsimmon'
import PipeParser from './pipe'
import AssignmentParser from './assignment'
import type { NodeType } from '../types'
import crap from './crap'

export default P.alt(AssignmentParser, PipeParser)
  .trim(crap)
  .map((value: NodeType): NodeType => value)
