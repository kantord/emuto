// @flow

import type {FunctionCallNodeType, GeneratedCodeType, NodeType} from '../types';

export default (
  Generator: NodeType => GeneratedCodeType,
): (FunctionCallNodeType => GeneratedCodeType) => ({
  value,
}: FunctionCallNodeType): GeneratedCodeType =>
  value.right
    ? `_.${value.left.value}(_.__first__(${Generator(value.right)}))(input)`
    : `_.${value.left.value}(input)`;
