import compile from '../compiler';

const tests = [
  {
    input: `null`,
    output: `null`,
  },
  {
    input: `true`,
    output: `true`,
  },
];

describe('compiler', () => {
  tests.forEach(({input, output}) => {
    it(`compiles ${input}`, () => {
      expect(compile(input)).toEqual(output);
    });
  });
});
