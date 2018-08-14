import Parsimmon from 'parsimmon'

const TrueParser = Parsimmon.string('true')
const FalseParser = Parsimmon.string('false')

export default Parsimmon.alt(TrueParser, FalseParser).map(value => ({
  type: 'primitive',
  value
}))
