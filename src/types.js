// @flow

export type ParserReturnValueType = {|
  status?: boolean,
  index?: {|
    line: number,
    column: number
  |},
  expected?: Array<SourceCodeType>, // eslint-disable-line no-use-before-define
  value: NodeType // eslint-disable-line no-use-before-define
|};

export type PrimitiveNodeType = {|
  type: 'primitive',
  value: string
|};

export type IdentifierNodeType = {|
  type: 'identifier',
  value: string
|};

export type TupleNodeType = {|
  type: 'tuple',
  value: [PrimitiveNodeType, PrimitiveNodeType]
|};

export type InputNodeType = {|
  type: 'input',
  value: '$'
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

export type ParenthesesNodeType = {|
  type: 'parentheses',
  value: NodeType // eslint-disable-line no-use-before-define
|};

export type ObjectNodeType = {|
  type: 'object',
  value: Array<NodeType> // eslint-disable-line no-use-before-define
|};

export type PipeNodeType = {|
  type: 'pipe',
  value: {|
    left: NodeType, // eslint-disable-line no-use-before-define
    right: NodeType // eslint-disable-line no-use-before-define
  |}
|};

export type ValuePropNodeType = {|
  type: 'valueProp',
  value: {
    left: NodeType, // eslint-disable-line no-use-before-define
    right: string
  }
|};

export type FunctionCallNodeType = {|
  type: 'functionCall',
  value: {
    left: IdentifierNodeType,
    right: NodeType // eslint-disable-line no-use-before-define
  }
|};

export type FunctionCallLambdaNodeType = {|
  type: 'functionCallLambda',
  value: {
    left: IdentifierNodeType,
    right: NodeType // eslint-disable-line no-use-before-define
  }
|};

export type ProjectionNodeType = {|
  type: 'projection',
  value: {
    left: NodeType, // eslint-disable-line no-use-before-define
    right: ListNodeType // eslint-disable-line no-use-before-define
  }
|};

export type NodeType =
  | PrimitiveNodeType
  | TupleNodeType
  | InputNodeType
  | InputNodeType
  | InputPropNodeType
  | ListNodeType
  | PipeNodeType
  | ParenthesesNodeType
  | ObjectNodeType
  | ValuePropNodeType
  | FunctionCallNodeType
  | FunctionCallLambdaNodeType
  | ProjectionNodeType;

export type OutputType = mixed => mixed;
export type SourceCodeType = string;
export type GeneratedCodeType = string;
export type ParserType = SourceCodeType => ParserReturnValueType;
