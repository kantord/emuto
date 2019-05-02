// @flow

import type { OperationNodeType, GeneratedCodeType, NodeType } from '../types'

export default ({ value }: OperationNodeType): GeneratedCodeType => {
  const Generator = require('./generator').default
  const operands = value
    .filter((_, index) => index % 2 === 0)
    .map(item => `(${Generator(item)})`)
    .join(',')
  const calculations = `${value
    .map(
      (item: NodeType, index): string => {
        return index % 2 === 0 ? `values[${Math.floor(index / 2)}]` : item.value
      }
    )
    .join('')}`
  return `(new Promise(function(resolve, reject) {Promise.all([${operands}]).catch(function(error) {reject(error)}).then(function(values) {resolve(${calculations})})}))`
}
