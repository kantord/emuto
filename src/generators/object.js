// @flow

import type { ObjectNodeType, GeneratedCodeType } from '../types'

export default ({ value }: ObjectNodeType): GeneratedCodeType =>
  `(_.objectify(${((): string => {
    const Generator = require('./generator').default
    return Generator({
      name: 'list',
      value
    })
  })()}))`
