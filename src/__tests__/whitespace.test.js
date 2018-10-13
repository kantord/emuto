// @flow

import parse from '../parsers/parser'
const examples = [
  ` 0`,
  `0 `,
  `[
0
]`,
  `// This is a comment
    42`,
  `42
    // This is a comment
    `,
  `
    filter
    // foo bar / asd
    $ => "Hello"
    `,
  `
    filter
    // foo bar / asd
    $ =>
    // foo bar / asd
    "Hello"
    `,
  `
    filter // sadsadasd
    // foo bar / asd
    $ // sasadasdasd
    // asdasd 
    => // asdsada sdsad
    // foo bar / asd
    "Hello"
    `,
  `
    3 // foo
    + 4
    `,
  `
    3 + //foo
    //goo 
    4 // foo
    `,
  `
    3 +
    //goo 
    4
    *
    "hello" // 324234
    - // asdsad
    4
    `,
  `
    // foo
    join //ffoo
    // foo
    "Hello" // foo
    //foo
    `,
  `
    // foo
    -
    // foo
    4
    `,
  `
    [4, 3] //foo
    // foo
    [3, 2] // 3423
    .foo // foo
    // #
    `,
  `
    [
    // foo
    5
    , // foo
    43 //foo
    ,
    "Hello" // foo
    , // foo
    34234 , //
    "Hello" //
    ] //
    `
]

describe('whitespace tests', () => {
  examples.forEach((example: string): void =>
    it(`parses '${example.slice(0, 25)}'`, () => {
      parse(example)
    })
  )
})
