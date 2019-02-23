// @flow

import projection from '../projection'
import objectProjection from '../objectProjection'
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

  it('object projection', () => {
    const tree = {
      name: 'objectProjection',
      value: {
        optional: false,
        left: {
          name: 'list',
          value: [
            {
              name: 'simpleList',
              value: [
                {
                  name: 'primitive',
                  value: '3'
                },
                {
                  name: 'primitive',
                  value: '2'
                }
              ]
            }
          ]
        },
        right: ['foo', 'bar', 'baz']
      }
    }

    const fakeGenerator = (): string => 'input.foo'

    expect(objectProjection(fakeGenerator)(tree)).toEqual(
      '_.__objectProjection__(input.foo, ["foo","bar","baz"], false)'
    )
  })
})
