import execute from '../interpreter';

const tests = [
  {
    input: `null`,
    output: null,
  },
  {
    input: `true`,
    output: true,
  },
];

describe('interpreter', () => {
  tests.forEach(({input, output}) => {
    it(`executes ${input}`, () => {
      expect(execute(input)).toEqual(output);
    });
  });
});
