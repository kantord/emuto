// @flow

import P from 'parsimmon'
import CollectionCoreParser from '../collections/collectionCore'
import crap from '../crap'
import type { CollectionCoreNodeType, ParserType } from '../../types'

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
  CollectionCoreParser.trim(crap)
    .wrap(P.string(open), P.string(close))
    .map((value: {value: CollectionCoreNodeType}): CollectionCoreNodeType => value.value)
    .node(name)
    .desc(name)
