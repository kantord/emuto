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

  const buildCode = (node: Array<NodeType>): GeneratedCodeType => {
    if (node.length === 1) {
      return compile(node[0]);
    }

    if (node.length === 3) {
      return `_.__${compileOperator(node[1])}__(${compile(node[0])})(${compile(
        node[2],
      )})`;
    }

    return `_.__${compileOperator(node[node.length - 2])}__(${buildCode(
      node.slice(0, node.length - 2),
    )})(${compile(node[node.length - 1])})`;
  };
  return buildCode(value);
};

export default Generator;
