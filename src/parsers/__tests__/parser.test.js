// @flow

import parse from '../parser'
import type {ParserReturnValueType} from '../../types'

type ParserModuleType = {
  parse: () => ParserReturnValueType
};

jest.mock('../program', (): ParserModuleType => ({
  parse: (): ParserReturnValueType => ({
    status: false,
    index: {line: 1, column: 1},
    expected: ["'foo'", "'bar'"],
    value: {
      type: 'primitive',
      value: 'null'
    }
  })
}))

describe('parser', () => {
  it('throws on syntax error', () => {
    expect(() => {
      parse('¡')
    }).toThrow()
  })
  it('throws syntax error', () => {
    try {
      parse('¡')
    } catch (e) {
      expect(e).toBeInstanceOf(SyntaxError)
    }
  })
  it('throws correct line number error', () => {
    try {
      parse('¡')
    } catch (e) {
      expect(e.lineNumber).toEqual(1)
    }
  })
  it('throws correct column number error', () => {
    try {
      parse('¡')
    } catch (e) {
      expect(e.columnNumber).toEqual(1)
    }
  })
  it('throws correct message', () => {
    try {
      parse('¡foo123456789')
    } catch (e) {
      expect(e.message).toEqual("Expected 'foo' or 'bar' on line 1 column 1, found '¡foo123456' instead")
    }
  })
})
