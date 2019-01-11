// @flow

import type {OperationNodeType, GeneratedCodeType, NodeType} from '../types';
import _compileOperator from './common/compileOperator';

const compileOperator = _compileOperator({
  '+': 'add',
  '-': 'subtract',
  '*': 'multiply',
  '/': 'divide',
  '<=': 'lte',
  '>=': 'gte',
  '<': 'lt',
  '>': 'gt',
  '&&': 'and',
  '||': 'or',
  '===': 'equals',
  '!==': 'notEqual',
  '%': 'mod',
});

const Generator = ({value}: OperationNodeType): GeneratedCodeType => {
  const compile = require('./generator').default;

  const buildCode = (node: Array<NodeType>): GeneratedCodeType =>
    node.length === 1
      ? compile(node[0])
      : `_.__${compileOperator(node[1])}__(${buildCode(
          node.slice(2),
        )})(${compile(node[0])})`;
  return buildCode(value);
};

export default Generator;
