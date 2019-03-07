// @flow

export type CodeLocationType = {|
  column: number,
  line: number,
  offset: number
|};

export type NodeLocationType = {|
  end?: CodeLocationType,
  start?: CodeLocationType
|};

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
  name: 'primitive',
  value: string,
  ...?NodeLocationType
|};

export type VariableNodeType = {|
  name: 'variable',
  value: string
|};

export type IdentifierNodeType = {|
  name: 'identifier',
  value: string
|};

export type TupleNodeType = {|
  name: 'tuple',
  value: [NodeType, NodeType] // eslint-disable-line no-use-before-define
|};

export type InputPropNodeType = {|
  name: 'inputProp',
  value: string
|};

export type SimpleListSegmentType = {|
  name: 'simpleList',
  value: Array<NodeType> // eslint-disable-line no-use-before-define
|};
export type SpreadListSegmentType = {|
  name: 'spread',
  value: NodeType // eslint-disable-line no-use-before-define
|};
export type CollectionCoreSegmentType =
  | SimpleListSegmentType
  | SpreadListSegmentType;
export type CollectionCoreValueType = Array<CollectionCoreSegmentType>;

export type CollectionCoreNodeType = {|
  name: 'collectionCore',
  value: CollectionCoreValueType
|};

export type ListNodeType = {|
  name: 'list',
  value: CollectionCoreValueType, // eslint-disable-line no-use-before-define
  ...NodeLocationType
|};

export type ParenthesesNodeType = {|
  name: 'parentheses',
  value: NodeType // eslint-disable-line no-use-before-define
|};

export type ObjectNodeType = {|
  name: 'object',
  value: CollectionCoreValueType // eslint-disable-line no-use-before-define
|};

export type PipeNodeType = {|
  name: 'pipe',
  value: {|
    left: NodeType, // eslint-disable-line no-use-before-define
    right: NodeType // eslint-disable-line no-use-before-define
  |}
|};

export type ValuePropNodeType = {|
  name: 'valueProp',
  value: {
    optional: boolean,
    left: NodeType, // eslint-disable-line no-use-before-define
    right: string
  }
|};

export type FunctionCallNodeType = {|
  name: 'functionCall',
  value: {
    left: IdentifierNodeType,
    right: ?NodeType // eslint-disable-line no-use-before-define
  }
|};

export type LambdaNodeValueType = {|
  variable: string,
  definition: NodeType // eslint-disable-line no-use-before-define
|};

export type LambdaNodeType = {|
  name: 'lambda',
  value: LambdaNodeValueType
|};

export type ProjectionNodeType = {|
  name: 'projection',
  value: {
    optional: boolean,
    left: NodeType, // eslint-disable-line no-use-before-define
    right: ListNodeType // eslint-disable-line no-use-before-define
  },
  ...?NodeLocationType
|};

export type SimpleObjectProjectionItemType = {|
  type: 'SimpleItem',
  alias?: string,
  value: string
|};

export type RecursiveObjectProjecitonItemType = {|
  type: 'RecursiveItem',
  name: string,
  alias?: string,
  value: {
    name: 'objectProjection',
    value: Array<ObjectProjectionItemType> // eslint-disable-line no-use-before-define
  }
|};

export type FragmentObjectProjectionItemType = {|
  type: 'FragmentItem',
  value: string
|};

export type ObjectProjectionItemType =
  | SimpleObjectProjectionItemType
  | RecursiveObjectProjecitonItemType
  | FragmentObjectProjectionItemType;

export type ObjectProjectionNodeType = {|
  name: 'objectProjection',
  alias?: string,
  value: {
    optional: boolean,
    left: NodeType, // eslint-disable-line no-use-before-define
    right: Array<ObjectProjectionItemType> // eslint-disable-line no-use-before-define
  },
  ...?NodeLocationType
|};

export type OperationNodeType = {|
  name: 'binaryOperation',
  value: Array<NodeType>, // eslint-disable-line no-use-before-define
  ...?NodeLocationType
|};

export type UnaryOperationNodeType = {|
  name: 'unaryOperation',
  value: {
    operator: PrimitiveNodeType,
    operand: NodeType // eslint-disable-line no-use-before-define
  },
  ...?NodeLocationType
|};

export type TernaryNodeValueType = {|
  left: NodeType, // eslint-disable-line no-use-before-define
  middle: NodeType, // eslint-disable-line no-use-before-define
  right: NodeType // eslint-disable-line no-use-before-define
|};

export type TernaryNodeType = {|
  name: 'ternary',
  value: TernaryNodeValueType,
  ...?NodeLocationType
|};

export type AssignmentNodeValueType = {|
  program: NodeType, // eslint-disable-line no-use-before-define
  assignments: AssignmentsType // eslint-disable-line no-use-before-define
|};

export type AssignmentNodeType = {|
  name: 'assignment',
  value: AssignmentNodeValueType
|};

export type NodeType =
  | PrimitiveNodeType
  | VariableNodeType
  | TupleNodeType
  | InputPropNodeType
  | ListNodeType
  | PipeNodeType
  | ParenthesesNodeType
  | ObjectNodeType
  | ValuePropNodeType
  | ObjectProjectionNodeType
  | FunctionCallNodeType
  | LambdaNodeType
  | OperationNodeType
  | UnaryOperationNodeType
  | AssignmentNodeType
  | ProjectionNodeType
  | TernaryNodeType;

export type ValueNodeType =
  | PrimitiveNodeType
  | InputPropNodeType
  | ListNodeType
  | ParenthesesNodeType;

export type ProjectableNodeType =
  | ValuePropNodeType
  | ObjectNodeType
  | ValueNodeType;

export type AssignmentType = [PrimitiveNodeType, NodeType];
export type AssignmentsType = Array<AssignmentType>;
export type OutputType = (input: mixed, variables?: {[string]: mixed}) => mixed;
export type SourceCodeType = string;
export type GeneratedCodeType = string;
export type ParserType = SourceCodeType => ParserReturnValueType;
