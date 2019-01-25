// @flow

import execute from '../interpreterGenerator'

function * inputGenerator (a: number, b: number, c: number): Iterable<number> {
  yield a
  yield b
  yield c
}

describe('interpreterGenerator', () => {
  it('returns correct value', () => {
    expect(Array.from(execute('$ + 1')(inputGenerator(0, -1, 2)))).toEqual([
      1,
      0,
      3
    ])
  })

  it('throws syntax error on invalid source code', () => {
    expect(() => {
      execute('¡')
    }).toThrow(SyntaxError)
  })
})
