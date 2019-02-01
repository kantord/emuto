// @flow

import type {VariableNodeType, GeneratedCodeType} from '../types';

export default ({value}: VariableNodeType): GeneratedCodeType =>
  value === '$'
    ? '_.__primitive__(input)'
    : `_.__primitive__(_.get('${value.slice(1)}'))`;
