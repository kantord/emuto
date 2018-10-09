import P from 'parsimmon'

import BooleanParser from './primitives/boolean'
import NullParser from './primitives/null'
import StringParser from './primitives/string'
import NumberParser from './primitives/number'

export default P.alt(
  BooleanParser,
  NullParser,
  StringParser,
  NumberParser
)
