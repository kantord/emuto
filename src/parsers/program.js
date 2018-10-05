// @flow

import Parsimmon from 'parsimmon'
import TupleParser from './tuple/tuple'
import PipeParser from './pipe/pipe'
import type { NodeType } from '../types'
import FunctionCallParser from './functionCall'
import FunctionCallLambdaParser from './functionCallLambda'

export default Parsimmon.seq(
  Parsimmon.optWhitespace,
  Parsimmon.alt(
    FunctionCallLambdaParser,
    FunctionCallParser,
    PipeParser,
    TupleParser
  ),
  Parsimmon.optWhitespace
).map((value: [mixed, NodeType, mixed]): NodeType => value[1])
