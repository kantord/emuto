// @flow

import P from 'parsimmon'
import IdentifierParser from './identifier'
import crap from './crap'

export default P.string('$')
  .then(IdentifierParser)
  .trim(crap)
  .map(({ value }: {value: string}): string => `$${value}`)
  .node('variable')
