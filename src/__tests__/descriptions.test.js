// @flow

const fs = require('fs')
const path = require('path')

const exclude = [
  '__tests__',
  'abstract',
  'pipe',
  'tuple',
  'primitives',
  'operand.js',
  'listCore.js',
  'crap.js',
  'functionCall.js',
  'parser.js',
  'primitive.js',
  'value.js',
  'section.js',
  'projectable.js',
  'program.js'
]
const files = fs
  .readdirSync(path.join(__dirname, '..', 'parsers'))
  .filter((item: string): boolean => !exclude.includes(item))

describe('descriptions', () => {
  files.forEach((fileName: string) => {
    const parserName = fileName.slice(0, -3)
    const moduleName = `../parsers/${parserName}`
    // $FlowFixMe
    const parser = require(moduleName).default._
    const options = parser('¡').expected
    it(parserName, () => {
      expect(options[0]).toEqual(parserName)
    })
  })
})
