// @flow

import combinations from 'combinations-generator'
import { product } from 'cartesian-product-generator'
import type { ObjectProjectionItemType } from './types'

type ProjectableType = Array<mixed> & {[string]: mixed};
type ProjectionRuleType = number & string;
type ProjectionRulesType = Array<ProjectionRuleType>;
type ProjectableObjectType = {
  [string]: ProjectableObjectType
};

const convertUndefined = (value: ?mixed): mixed | null =>
  value === undefined ? null : value

const handleOptional = (value: ?mixed, f: mixed => mixed): mixed =>
  convertUndefined(value) === null ? null : f(value)

const handleProjectionItem = (
  projectable: ProjectableType
): (ProjectionRuleType => mixed) => (
  projectionRule: ProjectionRuleType
): mixed =>
  Number.isInteger(projectionRule)
    ? convertUndefined(projectable.slice(projectionRule)[0])
    : Array.isArray(projectionRule)
      ? convertUndefined(projectable.slice(...projectionRule))
      : convertUndefined(projectable[projectionRule])

const __objectProjection__ = (
  left: ProjectableObjectType,
  right: Array<ObjectProjectionItemType>,
  optional: boolean
): mixed => {
  const newObject = {}
  right.forEach((rule: ObjectProjectionItemType) => {
    let key
    let finalKey
    if (rule.type === 'SimpleItem') {
      key = rule.value
      finalKey = rule.alias || key
      if (key in left) {
        newObject[finalKey] = left[key]
      } else {
        newObject[finalKey] = null
      }
    }

    if (rule.type === 'RecursiveItem') {
      key = rule.name
      finalKey = rule.alias || key
      const rules = rule.value.value
      if (key in left) {
        newObject[finalKey] = __objectProjection__(left[key], rules, false)
      } else {
        newObject[finalKey] = null
      }
    }
  })

  return newObject
}

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

  __opt__: handleOptional,

  __spread__: (input: mixed): mixed =>
    Array.isArray(input)
      ? input
      : typeof input === 'string' || input instanceof String
        ? input.split('')
        : Object.entries(input),

  projection: (
    left: ProjectableType,
    right: ProjectionRulesType,
    optinal: boolean
  ): mixed =>
    right.length === 1
      ? handleOptional(left, (): mixed => handleProjection(left)(right)[0])
      : handleOptional(left, (): mixed => handleProjection(left)(right)),

  __objectProjection__,

  split: (separator: string): (string => Array<string>) => (
    input: string
  ): Array<string> => input.split(separator),

  join: (separator: string): ((Array<string>) => string) => (
    input: Array<string>
  ): string => input.join(separator),

  map: (f: mixed => mixed): ((Array<mixed>) => Array<mixed>) => (
    input: Array<mixed>
  ): Array<mixed> => input.map(f),

  sortBy: (f: <T>(mixed) => T): ((Array<mixed>) => Array<mixed>) => (
    input: Array<mixed>
  ): Array<mixed> =>
    input
      .slice()
      .sort(
        (a: mixed, b: mixed): 1 | 0 | -1 =>
          f(a) < f(b) ? -1 : f(a) > f(b) ? 1 : 0
      ),

  has: (
    key: string | number
  ): ((Array<mixed> | {[mixed]: mixed}) => boolean) => (
    input: Array<mixed> | {[mixed]: mixed}
  ): boolean => key in input,

  filter: (f: mixed => boolean): ((Array<mixed>) => Array<mixed>) => (
    input: Array<mixed>
  ): Array<mixed> => input.filter(f),

  get: function (variable: string): mixed {
    return this[variable]
  },

  assign: function (
    variable: string,
    value: mixed,
    context: {[string]: mixed}
  ): {[string]: mixed} {
    return Object.assign({}, context, { [variable]: value })
  },

  reverse: (input: Array<mixed>): Array<mixed> => input.slice().reverse(),

  reduce: ([f, x]: [(mixed) => mixed => mixed, mixed]): ((
    Array<mixed>,
  ) => mixed) => (input: Array<mixed>): mixed =>
    input.reduce((a: mixed, b: mixed): mixed => f(a)(b), x),

  length: (input: Array<mixed>): number => input.length,

  keys: (input: {[string]: mixed}): Array<string> => Object.keys(input),

  values: (input: {[string]: mixed}): Array<mixed> => Object.values(input),

  combinations: (r: number): Array<mixed> | (string => Array<Array<mixed>>) => (
    input: Array<mixed> | string
  ): Array<Array<mixed>> => Array.from(combinations(input, r)),

  product: (input: Array<mixed> | string): Array<Array<mixed>> =>
    Array.from(product(...input)),

  error: (message: string): (mixed => void) => (input: mixed) => {
    throw new Error(message)
  }
}
