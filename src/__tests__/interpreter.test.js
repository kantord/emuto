// @flow

import execute from '../interpreter';
import compile from '../compiler';
import parse from '../parsers/parser';

const X = '10 - 10 -10 ';

const tests = [
  {
    sourceCode: `null`,
    output: null,
  },
  {
    sourceCode: `true`,
    output: true,
  },
  {
    sourceCode: `$`,
    input: true,
    output: true,
  },
  {
    sourceCode: `$`,
    input: 98,
    output: 98,
  },
  {
    sourceCode: `.bar`,
    input: {bar: 4, baz: 'hello'},
    output: 4,
  },
  {
    sourceCode: `.$shit`,
    input: {$shit: null, baz: 'hello'},
    output: null,
  },
  {
    sourceCode: `[0.14, true, "true 2"]`,
    output: [0.14, true, 'true 2'],
  },
  {
    sourceCode: `[[false], [true, null]]`,
    output: [[false], [true, null]],
  },
  {
    sourceCode: `false | true`,
    output: true,
  },
  {
    sourceCode: `.foo | .bar`,
    input: {
      foo: {
        bar: 'hello',
      },
    },
    output: 'hello',
  },
  {
    sourceCode: `.foo | .bar | .baz`,
    input: {
      foo: {
        bar: {
          baz: 'world',
        },
      },
    },
    output: 'world',
  },
  {
    sourceCode: `.apple.pear`,
    input: {
      apple: {
        pear: 42,
      },
    },
    output: 42,
  },
  {
    sourceCode: `.apple.pear.bar`,
    input: {
      apple: {
        pear: {bar: false},
      },
    },
    output: false,
  },
  {
    sourceCode: `null: true`,
    output: [null, true],
  },
  {
    sourceCode: `{
      "foo": [-42, $],
      "bar": {
        "message": "Hello World"
      }
    }`,
    input: 42,
    output: {
      foo: [-42, 42],
      bar: {message: 'Hello World'},
    },
  },
  {
    sourceCode: `{"foo": ("bar" | "baz")}`,
    output: {
      foo: 'baz',
    },
  },
  {
    sourceCode: `{"foo": ("bar" | "baz")}["foo"]`,
    output: 'baz',
  },
  {
    sourceCode: `[3, 2][0]`,
    output: 3,
  },
  {
    sourceCode: `[3, 2][0] : [3, 2][1]`,
    output: [3, 2],
  },
  {
    sourceCode: `[3, 2][0] | [3, 2][1]`,
    output: 2,
  },
  {
    sourceCode: `join " "`,
    input: ['Hello', 'World'],
    output: 'Hello World',
  },
  {
    sourceCode: `map \\" "`,
    input: ['Hello', 'World'],
    output: [' ', ' '],
  },
  {
    sourceCode: `{"original": $.foo} | {"new": $}`,
    input: {foo: 42},
    output: {new: {original: 42}},
  },
  {
    sourceCode: `map $ => {"original": $.foo} | map $=> {"new": $}`,
    input: [{foo: 42}, {foo: 'hello'}],
    output: [{new: {original: 42}}, {new: {original: 'hello'}}],
  },
  {
    sourceCode: `map $ => {"original": $.foo} | "foo"`,
    input: [{foo: 42}, {foo: 'hello'}],
    output: 'foo',
  },
  {
    sourceCode: `[0,1,2][1,2][1,1][0]`,
    output: 2,
  },
  {
    sourceCode: `[0,1,"foo"][1,2][1,1][0]`,
    output: 'foo',
  },
  {
    sourceCode: `{"foo": [{"bar": "baz"}]} | $.foo[0].bar`,
    output: 'baz',
  },
  {
    sourceCode: `sortBy \\.age | map \\.name`,
    output: ['John', 'Mary'],
    input: [{name: 'John', age: 11}, {name: 'Mary', age: 33}],
  },
  {
    sourceCode: `8 * 3.14 / 2`,
    output: 8 * 3.14 / 2,
  },
  {
    sourceCode: `8 + 3.14 * 2`,
    output: 8 + 3.14 * 2,
  },
  {
    sourceCode: `(8 + 3.14) * 2`,
    output: (8 + 3.14) * 2,
  },
  {
    sourceCode: `8 - (3.14 * 2)`,
    output: 8 - 3.14 * 2,
  },
  {
    sourceCode: `8314 % 34 -3`,
    output: 8314 % 34 - 3,
  },
  {
    sourceCode: `3 * 2 -1 <= -1.34 * 3`,
    output: 3 * 2 - 1 <= -1.34 * 3,
  },
  {
    sourceCode: `3 * 2 -1 < -1.34 * 3`,
    output: 3 * 2 - 1 < -1.34 * 3,
  },
  {
    sourceCode: `3 * 2 -1 >= -1.34 * 3`,
    output: 3 * 2 - 1 >= -1.34 * 3,
  },
  {
    sourceCode: `3 * 2 -1 > -1.34 * 3`,
    output: 3 * 2 - 1 > -1.34 * 3,
  },
  {
    sourceCode: `3 * 2 -1 == -1.34 * 3`,
    output: 3 * 2 - 1 === -1.34 * 3,
  },
  {
    sourceCode: `3 * 2 -1 != -1.34 * 3`,
    output: 3 * 2 - 1 !== -1.34 * 3,
  },
  {
    sourceCode: `"1" == 1`,
    output: '1' === 1,
  },
  {
    sourceCode: `3 * 2 -1 > -1.34 * 3 || true`,
    output: 3 * 2 - 1 > -1.34 * 3 || true,
  },
  {
    sourceCode: `3 * 2 -1 > -1.34 * 3 || false`,
    output: 3 * 2 - 1 > -1.34 * 3 || false,
  },
  {
    sourceCode: `3 * 2 -1 > -1.34 * 3 && false`,
    output: 3 * 2 - 1 > -1.34 * 3 && false,
  },
  {
    sourceCode: `3 * 2 -1 > -1.34 * 3 && true`,
    output: 3 * 2 - 1 > -1.34 * 3 && true,
  },
  {
    sourceCode: `-(3 * 2) -1 > -1.34 * 3 && true`,
    output: -(3 * 2) - 1 > -1.34 * 3 && true,
  },
  {
    sourceCode: `+(3 * 2) -1 > -1.34 * 3 && true`,
    output: +(3 * 2) - 1 > -1.34 * 3 && true,
  },
  {
    sourceCode: `!(3 * 2 -1 > -1.34 * 3) && true`,
    output: !(3 * 2 - 1 > -1.34 * 3) && true,
  },
  {
    sourceCode: `!(3 * .foo -1 > -1.34 * .bar) && true`,
    input: {
      foo: 2,
      bar: 3,
    },
    output: !(3 * 2 - 1 > -1.34 * 3) && true,
  },
  {
    sourceCode: `filter $ => .age >= 18 | map $ => .name`,
    input: [
      {name: 'John', age: 17},
      {name: 'Mary', age: 18},
      {name: 'Gabe', age: 19},
      {name: 'Franz', age: 8},
    ],
    output: ['Mary', 'Gabe'],
  },
  {
    sourceCode: `3 * 2 -1 > -1.34 * 3 or true`,
    output: 3 * 2 - 1 > -1.34 * 3 || true,
  },
  {
    sourceCode: `!(3 * 2 -1 > -1.34 * 3) and true`,
    output: !(3 * 2 - 1 > -1.34 * 3) && true,
  },
  {
    sourceCode: `3 + $foobar where $foobar = 4`,
    output: 7,
  },
  {
    sourceCode: `(3 + $foobar | [$, $foobar]) where $foobar = $`,
    input: 4,
    output: [7, 4],
  },
  {
    sourceCode: `($x + $foobar | [$, $foobar]) where $x = 3 $foobar = ($x + 1)`,
    input: 4,
    output: [7, 4],
  },
  {
    sourceCode: `([1] | map $foo | $[0]) where $foo = ($ => 4)`,
    output: 4,
  },
  {
    sourceCode: `([1] | foo 4) where $foo = ($ => $ => 4)`,
    output: 4,
  },
  {
    sourceCode: `([1, 2] | foo) where $foo = $reverse`,
    output: [2, 1],
  },
  {
    sourceCode: `map $foo => [$foo]`,
    input: [1, 2],
    output: [[1], [2]],
  },
  {
    sourceCode: `reduce ($a => $b => $a + $b): 0`,
    input: [1, 2, -1, 3],
    output: 5,
  },
  {
    sourceCode: `[1, ...$, 3, ...$]`,
    input: [1, 2],
    output: [1, 1, 2, 3, 1, 2],
  },
  {
    sourceCode: `{"foo": 3} | {"bar": "baz", ...$}`,
    output: {
      foo: 3,
      bar: 'baz',
    },
  },
  {
    sourceCode: `$.uno?.dos?.tres`,
    input: {
      uno: {},
    },
    output: null,
  },
  {
    sourceCode: `$?[3]`,
    input: undefined,
    output: null,
  },
  {
    sourceCode: `$?[3]`,
    input: [1, 2, 3],
    output: null,
  },
  {
    sourceCode: `3 + 4 if 2 <= 3 else -12`,
    output: 7,
  },
  {
    sourceCode: `3 : 4 if null else [-12] | [$[0]]`,
    output: [-12],
  },
  {
    sourceCode: `[each .author.name in .articles sortBy $ => .author.age]`,
    input: {
      articles: [
        {author: {age: 3, name: 'Jonas'}},
        {author: {age: 34, name: 'Johnny'}},
        {author: {age: 33, name: 'Mary'}},
      ],
    },
    output: ['Jonas', 'Mary', 'Johnny'],
  },
  {
    sourceCode: `[each .author.age in .articles reverse]`,
    input: {
      articles: [
        {author: {age: 3, name: 'Jonas'}},
        {author: {age: 34, name: 'John'}},
        {author: {age: 33, name: 'Mary'}},
      ],
    },
    output: [33, 34, 3],
  },
  {
    sourceCode: `[each .author.age in .articles]`,
    input: {
      articles: [
        {author: {age: 3, name: 'Jonas'}},
        {author: {age: 34, name: 'Johnny'}},
        {author: {age: 33, name: 'Maria'}},
      ],
    },
    output: [3, 34, 33],
  },
  {
    sourceCode: `[each .author.name in .articles if .author.age >= 30 sortBy $ => .author.age]`,
    input: {
      articles: [
        {author: {age: 3, name: 'Jones'}},
        {author: {age: 34, name: 'John'}},
        {author: {age: 33, name: 'Mary'}},
      ],
    },
    output: ['Mary', 'John'],
  },
  {
    sourceCode: `{each $: (length) in $}`,
    input: ['bo', 'boo'],
    output: {bo: 2, boo: 3},
  },
  {
    sourceCode: `$[1:3]`,
    input: [1, 2, 3, 4],
    output: [2, 3],
  },
  {
    sourceCode: `[0, ..."Hello"]`,
    output: [0, 'H', 'e', 'l', 'l', 'o'],
  },
  {
    sourceCode: `[...$foo] where $foo = "Hello"`,
    output: ['H', 'e', 'l', 'l', 'o'],
  },
  {
    sourceCode: `error "Hello" if false else "asdfgb"`,
    output: 'asdfgb',
  },
  {
    sourceCode: `[($ => error "asd" | "f")]`,
    output: ['f'],
  },
  {
    sourceCode: `((3))`,
    output: 3,
  },
  {
    sourceCode: `( ((3)))`,
    output: 3,
  },
  {
    sourceCode: `[[]]`,
    output: [[]],
  },
  {
    sourceCode: `[[[]]]`,
    output: [[[]]],
  },
  {
    sourceCode: `[ [  [ [  [ ] ]]]  ]`,
    output: [[[[[]]]]],
  },
  {
    sourceCode: `(([$] | [$x, $y] | [$]) where $x = (.foo | [$] | $[0]) $y =(.bar | ["z", $] | [$] | $[0][0])) | $[0]`,
    input: {foo: 'a', bar: 'b'},
    output: ['a', 'z'],
  },
  {
    sourceCode: X,
    output: eval(X),
  },
];

describe('interpreter', () => {
  it('handles errors correctly', () => {
    expect((): mixed => execute(`error "x"`)()).toThrow('x');
  });

  tests.forEach(
    ({
      sourceCode,
      output,
      input,
    }: {
      sourceCode: string,
      output: mixed,
      input?: mixed,
    }) => {
      it(`executes ${sourceCode}`, () => {
        expect(execute(sourceCode)(input)).toEqual(output);
      });

      it(`correct target code ${sourceCode}`, () => {
        expect(compile(sourceCode)).toMatchSnapshot();
      });

      it(`correct target tree ${sourceCode}`, () => {
        expect(parse(sourceCode)).toMatchSnapshot();
      });
    },
  );

  it(`allow passing single variable`, () => {
    expect(execute('$foo')(null, {foo: 3})).toEqual(3);
  });

  it(`allow passing multiple variables`, () => {
    expect(execute('$foo + $bar')(null, {foo: 4, bar: -2})).toEqual(2);
  });

  it(`doesn't allow passing functions`, () => {
    expect((): mixed =>
      execute('foo 4')(null, {foo: (x: ?mixed): number => 3}),
    ).toThrow();
  });

  it('throws syntax error on invalid source code', () => {
    expect(() => {
      execute('¡');
    }).toThrow(SyntaxError);
  });
});
