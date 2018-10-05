// @flow

import Parsimmon from 'parsimmon'
import TupleParser from './tuple/tuple'
import PipeParser from './pipe/pipe'
import type { NodeType } from '../types'
import FunctionCallParser from './functionCall'

export default Parsimmon.seq(
  Parsimmon.optWhitespace,
  Parsimmon.alt(FunctionCallParser, PipeParser, TupleParser),
  Parsimmon.optWhitespace
).map((value: [mixed, NodeType, mixed]): NodeType => value[1])
