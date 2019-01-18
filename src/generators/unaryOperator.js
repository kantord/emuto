// @flow

import _compileOperator from './common/compileOperator'
import type { UnaryOperationNodeType, GeneratedCodeType } from '../types'

const compileOperator = _compileOperator({
  '+': 'id',
  '-': 'negateNumber',
  '!': 'not'
})

export default ({ value }: UnaryOperationNodeType): GeneratedCodeType => {
  const Generator = require('./generator').default

  return `(_.__${compileOperator(value.operator)}__(${Generator(
    value.operand
  )}))`
}
