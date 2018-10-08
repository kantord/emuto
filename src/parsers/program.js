// @flow

import Parsimmon from 'parsimmon'
import TupleParser from './tuple/tuple'
import PipeParser from './pipe/pipe'
import type { NodeType } from '../types'

export default Parsimmon.seq(
  Parsimmon.optWhitespace,
  Parsimmon.alt(PipeParser, TupleParser),
  Parsimmon.optWhitespace
).map((value: [mixed, NodeType, mixed]): NodeType => value[1])
