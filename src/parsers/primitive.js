import Parsimmon from 'parsimmon'

import BooleanParser from './primitives/boolean'
import NullParser from './primitives/null'
import StringParser from './primitives/string'
import NumberParser from './primitives/number'

export default Parsimmon.alt(
  BooleanParser,
  NullParser,
  StringParser,
  NumberParser
)
