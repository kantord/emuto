// @flow

import Parsimmon from 'parsimmon'

import ListCoreParser from './listCore'
import type { ListNodeType } from '../types'

export default ListCoreParser.trim(Parsimmon.optWhitespace)
  .wrap(Parsimmon.string('['), Parsimmon.string(']'))
  .map((value: ListNodeType): ListNodeType => ({
    type: 'list',
    value: value.value
  }))
