// @flow

import type {ObjectNodeType, GeneratedCodeType, NodeType} from '../types'

export default ({value}: ObjectNodeType): GeneratedCodeType =>
  `([${value
    .map((item: NodeType): string => {
      const Generator = require('./generator').default
      return Generator(item)
    })
    .join(', ')}].reduce(function(a,b){a[b[0]]=b[1];return a;},{}))`
