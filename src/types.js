// @flow

export type PrimitiveNodeType = {|
  type: 'primitive',
  value: string
|};

export type TupleNodeType = {|
  type: 'tuple',
  value: [PrimitiveNodeType, PrimitiveNodeType]
|};

export type InputNodeType = {|
  type: 'input',
  value: '.'
|};

export type InputPropNodeType = {|
  type: 'inputProp',
  value: string
|};

export type NodeType = PrimitiveNodeType | TupleNodeType | InputNodeType | InputNodeType;

export type OutputType = mixed => mixed;
export type SourceCodeType = string;
export type GeneratedCodeType = string;
