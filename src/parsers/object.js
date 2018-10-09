// @flow

import P from 'parsimmon'

import ListCoreParser from './listCore'
import type { ObjectNodeType } from '../types'

export default P.seq(
  P.regexp(/\s*\{\s*/),
  ListCoreParser,
  P.regexp(/\s*\}\s*/)
).map((value: [mixed, ObjectNodeType, mixed]): ObjectNodeType => ({
  name: 'object',
  value: value[1].value
}))
