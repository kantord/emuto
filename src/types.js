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

export type NodeType = PrimitiveNodeType | TupleNodeType | InputNodeType;

export type OutputType = mixed => mixed;
export type SourceCodeType = string;
export type GeneratedCodeType = string;
