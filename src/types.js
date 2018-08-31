// @flow

export type PrimitiveNodeType = {|
  type: 'primitive',
  value: string
|};

export type TupleNodeType = {|
  type: 'tuple',
  value: [PrimitiveNodeType, PrimitiveNodeType]
|};

export type NodeType = PrimitiveNodeType | TupleNodeType;

export type OutputType = mixed;
export type SourceCodeType = string;
export type GeneratedCodeType = string;
