import P from 'parsimmon'

import KeywordParser from './primitives/keyword'
import StringParser from './primitives/string'
import NumberParser from './primitives/number'

export default P.alt(KeywordParser, StringParser, NumberParser)
