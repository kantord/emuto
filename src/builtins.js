// @flow

export default {
  objectify: (input: Array<[string, mixed]>): {[string]: mixed} =>
    input.reduce(function (
      a: {[string]: mixed},
      b: [string, mixed]
    ): {[string]: mixed} {
      a[b[0]] = b[1]
      return a
    },
    {})
}
