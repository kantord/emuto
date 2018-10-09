// @flow

import P from 'parsimmon'

import ListCoreParser from './listCore'
import type { ListNodeType } from '../types'

export default ListCoreParser.trim(P.optWhitespace)
  .wrap(P.string('['), P.string(']'))
  .map((value: ListNodeType): ListNodeType => ({
    type: 'list',
    value: value.value
  }))
