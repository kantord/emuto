// @flow

import Parsimmon from 'parsimmon'

import ListCoreParser from './listCore'
import type {ListNodeType} from '../types'

export default Parsimmon.seq(
  Parsimmon.string('['),
  ListCoreParser,
  Parsimmon.string(']')
).map(
  (value: [mixed, ListNodeType, mixed]): ListNodeType => ({
    type: 'list',
    value: value[1].value
  })
)
