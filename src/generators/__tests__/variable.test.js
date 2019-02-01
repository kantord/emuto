import variable from '../variable';

describe('variable generator', () => {
  it('null', () => {
    expect(variable({name: 'variable', value: '$null'})).toEqual(
      `_.__primitive__(_.get('null'))`,
    );
  });
  it('false', () => {
    expect(variable({name: 'variable', value: '$false'})).toEqual(
      `_.__primitive__(_.get('false'))`,
    );
  });
  it('input', () => {
    expect(variable({name: 'variable', value: '$'})).toEqual(
      `_.__primitive__(input)`,
    );
  });
});
