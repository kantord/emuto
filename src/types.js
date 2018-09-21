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

export type ListCoreNodeType = {|
  type: 'listCore',
  value: Array<NodeType> // eslint-disable-line no-use-before-define
|};

export type ListNodeType = {|
  type: 'list',
  value: Array<NodeType> // eslint-disable-line no-use-before-define
|};

export type NodeType =
  | PrimitiveNodeType
  | TupleNodeType
  | InputNodeType
  | InputNodeType
  | InputPropNodeType
  | ListNodeType;

export type OutputType = mixed => mixed;
export type SourceCodeType = string;
export type GeneratedCodeType = string;
