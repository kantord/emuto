// @flow

import combinations from 'combinations-generator'
import { product } from 'cartesian-product-generator'

type ProjectableType = Array<mixed> & {[string]: mixed};
type ProjectionRuleType = number & string;
type ProjectionRulesType = Array<ProjectionRuleType>;

const convertUndefined = (value: ?mixed): mixed | null =>
  value === undefined ? null : value

const handleOptional = (value: ?mixed, f: mixed => mixed): mixed =>
  convertUndefined(value) === null ? null : f(value)

const __add__ = (left: number): (number => number) => (right: number): number =>
  left + right
const __subtract__ = (left: number): (number => number) => (
  right: number
): number => left - right
const __multiply__ = (left: number): (number => number) => (
  right: number
): number => left * right
const __divide__ = (left: number): (number => number) => (
  right: number
): number => left / right
const __lte__ = (left: number): (number => boolean) => (
  right: number
): boolean => left <= right
const __gte__ = (left: number): (number => boolean) => (
  right: number
): boolean => left >= right
const __lt__ = (left: number): (number => boolean) => (
  right: number
): boolean => left < right
const __gt__ = (left: number): (number => boolean) => (
  right: number
): boolean => left > right
const __and__ = (left: mixed): (mixed => mixed) => (right: mixed): mixed =>
  left && right
const __or__ = (left: mixed): (mixed => mixed) => (right: mixed): mixed =>
  left || right
const __equals__ = (left: mixed): (mixed => mixed) => (right: mixed): mixed =>
  left === right
const __notEqual__ = (left: mixed): (mixed => mixed) => (right: mixed): mixed =>
  left !== right
const __mod__ = (left: number): (number => number) => (right: number): number =>
  left % right

const __id__ = (x: mixed): mixed => x
const __negateNumber__ = (x: number): number => -x
const __not__ = (x: boolean): boolean => !x

const __ternary__ = (a: boolean, b: () => mixed, c: () => mixed): mixed => {
  if (a) {
    return b()
  } else {
    return c()
  }
}

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
  },

  __map_generator__: function * (
    xs: Iterable<mixed>,
    f: mixed => mixed
  ): Iterable<mixed> {
    for (let x of xs) yield f(x)
  },

  __add__,
  __subtract__,
  __multiply__,
  __divide__,
  __lte__,
  __gte__,
  __lt__,
  __gt__,
  __and__,
  __or__,
  __equals__,
  __notEqual__,
  __mod__,
  __not__,
  __negateNumber__,
  __id__,
  __ternary__
}
