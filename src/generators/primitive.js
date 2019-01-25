// @flow

import type {PrimitiveNodeType, GeneratedCodeType} from '../types';

export default ({value}: PrimitiveNodeType): GeneratedCodeType =>
  `_.__primitive__(${value})`;
