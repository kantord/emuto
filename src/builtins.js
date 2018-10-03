// @flow

type ProjectableType = Array<mixed> & {[string]: mixed};
type ProjectionRuleType = number & string;
type ProjectionRulesType = Array<ProjectionRuleType>;

const convertUndefined = (value: ?mixed): mixed | null =>
  value === undefined ? null : value

const handleProjectionItem = (
  projectable: ProjectableType
): (ProjectionRuleType => mixed) => (
  projectionRule: ProjectionRuleType
): mixed =>
  Number.isInteger(projectionRule)
    ? convertUndefined(projectable.slice(projectionRule)[0])
    : convertUndefined(projectable[projectionRule])

const handleProjection = (
  projectable: ProjectableType
): (ProjectionRulesType => Array<mixed> & mixed) => (
  projectionRules: ProjectionRulesType
): Array<mixed> & mixed =>
  projectionRules.map(handleProjectionItem(projectable))

export default {
  objectify: (input: Array<[string, mixed]>): {[string]: mixed} =>
    input.reduce(function (
      a: {[string]: mixed},
      b: [string, mixed]
    ): {[string]: mixed} {
      a[b[0]] = b[1]
      return a
    },
    {}),
  projection: (left: ProjectableType, right: ProjectionRulesType): mixed =>
    right.length === 1
      ? handleProjection(left)(right)[0]
      : handleProjection(left)(right)
}
