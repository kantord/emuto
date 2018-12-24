import P from 'parsimmon'

import KeywordParser from './keyword'
import StringParser from './string'
import NumberParser from './number'

export default P.alt(KeywordParser, StringParser, NumberParser)
