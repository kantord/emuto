// @flow

import type {InputPropNodeType, GeneratedCodeType} from '../types'

export default ({value}: InputPropNodeType): GeneratedCodeType =>
  `input.${value.slice(1)}`
