import parser from '../collections/object'

describe('object parser', () => {
  it('parses {"foo": 1, "bar": null}', () => {
    expect(parser.parse('{"foo": 1, "bar": null}').status).toBe(true)
  })
})
