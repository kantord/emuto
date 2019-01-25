import primitive from '../primitive';

describe('primitive generator', () => {
  it('null', () => {
    expect(primitive({name: 'primitive', value: 'null'})).toEqual(
      '_.__primitive__(null)',
    );
  });
  it('false', () => {
    expect(primitive({name: 'primitive', value: 'false'})).toEqual(
      '_.__primitive__(false)',
    );
  });
});
