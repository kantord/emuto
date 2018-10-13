// @flow

import P from 'parsimmon'
import ListCoreParser from '../listCore'
import crap from '../crap'
import type { ListCoreNodeType, ParserType } from '../../types'

type ListLikeParserDefinitionType = {|
  name: string,
  open: string,
  close: string
|};

export default ({
  name,
  open,
  close
}: ListLikeParserDefinitionType): ParserType =>
  ListCoreParser.trim(crap)
    .wrap(P.string(open), P.string(close))
    .map((value: {value: ListCoreNodeType}): ListCoreNodeType => value.value)
    .node(name)
