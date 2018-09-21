// @flow

import type {PipeNodeType, GeneratedCodeType} from '../types'

export default ({value}: PipeNodeType): GeneratedCodeType => {
  const Generator = require('./generator').default
  const compiledLeft = Generator(value.left)
  const compiledRight = Generator(value.right)
  return `(function (input) {return ${compiledRight}})(${compiledLeft})`
}
