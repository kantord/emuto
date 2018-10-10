import P from 'parsimmon'
import ValueParser from './value'
import ObjectParser from './object'

export default P.alt(ObjectParser, ValueParser)
