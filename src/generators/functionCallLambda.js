// @flow

import type {
  FunctionCallLambdaNodeType,
  GeneratedCodeType,
  NodeType
} from '../types'

export default (
  Generator: NodeType => GeneratedCodeType
): (FunctionCallLambdaNodeType => GeneratedCodeType) => ({
  value
}: FunctionCallLambdaNodeType): GeneratedCodeType =>
  `(_.${value.left.value}(function(input) {return ${Generator(
    value.right
  )}})(input))`
