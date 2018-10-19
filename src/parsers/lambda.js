// @flow

import P from 'parsimmon'
import crap from './crap'
import TupleParser from './tuple/tuple'

export default P.alt(
  P.string('$')
    .then(crap)
    .then(P.string('=>'))
    .then(crap)
    .then(TupleParser),
  P.string('\\')
    .then(crap)
    .then(TupleParser)
)
  .trim(crap)
  .node('lambda')
