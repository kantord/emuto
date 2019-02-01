// @flow

import type {PipeNodeType, GeneratedCodeType, NodeType} from '../types';

export default ({value}: PipeNodeType): GeneratedCodeType => {
  const Generator = require('./generator').default;
  const wrapWithFunction = x => `function(input) {return ${x}}`;
  const wrappedSections = value.map(Generator).map(wrapWithFunction);
  return `function(inputs) {return _.__pipe__(${wrappedSections.join(
    ',',
  )})(inputs)}`;
};
