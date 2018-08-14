import Parsimmon from 'parsimmon'

export default Parsimmon.string('null').map(_ => ({
  type: 'primitive',
  value: 'null'
}))
