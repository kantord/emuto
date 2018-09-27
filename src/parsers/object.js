// @flow

import Parsimmon from 'parsimmon'

import ListCoreParser from './listCore'
import type {ObjectNodeType} from '../types'

export default Parsimmon.seq(
  Parsimmon.regexp(/\s*\{\s*/),
  ListCoreParser,
  Parsimmon.regexp(/\s*\}\s*/)
).map((value: [mixed, ObjectNodeType, mixed]): ObjectNodeType => ({
  type: 'object',
  value: value[1].value
}))
