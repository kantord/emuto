// @flow

import assignment from '../assignment'

describe('assignment generator', () => {
  it('generates correct output', () => {
    const x = {
      name: 'binaryOperation',
      value: [
        {
          name: 'primitive',
          value: '3'
        },
        {
          name: 'primitive',
          value: '+'
        },
        {
          name: 'primitive',
          value: '4'
        }
      ]
    }
    expect(
      assignment((): string => '3 + 4')({
        name: 'assignment',
        value: {
          value: {
            name: 'parentheses',
            value: x
          },
          name: {
            name: 'primitive',
            value: 'a34234'
          },
          program: x
        }
      })
    ).toEqual(
      "((function() {_ = _.assign('a34234', (3 + 4), _); return (3 + 4)})())"
    )
  })
})
