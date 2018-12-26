import parser from '../parentheses';

describe('parentheses parser', () => {
  it('parses ("foo" | "bar")', () => {
    expect(parser.parse('("foo" | "bar")').status).toBe(true);
  });

  it('parses (3 factorial)', () => {
    expect(parser.parse('(3 factorial)').status).toBe(true);
  });

  it('returns correct value', () => {
    expect(parser.parse('("Hello World")').value).toEqual({
      name: 'parentheses',
      value: {
        name: 'primitive',
        value: '"Hello World"',
      },
    });
  });
});
