// @flow

import P from 'parsimmon'
import TupleParser from './tuple/tuple'
import PipeParser from './pipe/pipe'
import type { NodeType } from '../types'

export default P.seq(
  P.optWhitespace,
  P.alt(PipeParser, TupleParser),
  P.optWhitespace
).map((value: [mixed, NodeType, mixed]): NodeType => value[1])
