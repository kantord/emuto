// @flow

import projection from '../projection'
import type { ProjectionNodeType } from '../../types'

const example = (optional: boolean): ProjectionNodeType => ({
  name: 'projection',
  value: {
    optional,
    left: {
      name: 'inputProp',
      value: '.foo'
    },
    right: {
      name: 'list',
      value: [{ name: 'simpleList', value: [] }]
    }
  }
})

describe('projection generator', () => {
  it('.foo.bar', () => {
    const fakeGenerator = (
      { name } // eslint-disable-line flowtype/require-parameter-type
    ): string => (name === 'inputProp' ? 'input.foo' : '[4]')
    expect(projection(fakeGenerator)(example(false))).toEqual(
      '_.projection(input.foo, [4], false)'
    )
  })

  it('.foo?.bar', () => {
    const fakeGenerator = (
      { name } // eslint-disable-line flowtype/require-parameter-type
    ): string => (name === 'inputProp' ? 'input.foo' : '[4]')
    expect(projection(fakeGenerator)(example(true))).toEqual(
      '_.projection(input.foo, [4], true)'
    )
  })
})
