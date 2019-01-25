import binaryOperator from '../binaryOperator';

describe('binaryOperator generator', () => {
  it('generates correct code - single operation', () => {
    expect(
      binaryOperator({
        name: 'additive',
        value: [
          {
            name: 'variable',
            value: '$',
          },
          {name: 'primitive', value: '+'},
          {
            name: 'variable',
            value: '$',
          },
        ],
      }),
    ).toEqual('_.__add__(input)(input)');
  });

  it('generates correct code - multiple operations', () => {
    expect(
      binaryOperator({
        name: 'additive',
        value: [
          {
            name: 'variable',
            value: '$',
          },
          {name: 'primitive', value: '+'},
          {
            name: 'variable',
            value: '$',
          },
          {name: 'primitive', value: '-'},
          {
            name: 'variable',
            value: '$',
          },
        ],
      }),
    ).toEqual('_.__add__(_.__subtract__(input)(input))(input)');
  });

  it('generates correct code - `10 - 10 - 10 - 10`', () => {
    expect(
      binaryOperator({
        name: 'additive',
        value: [
          {
            name: 'primitive',
            value: '10',
          },
          {name: 'primitive', value: '-'},
          {
            name: 'primitive',
            value: '10',
          },
          {name: 'primitive', value: '-'},
          {
            name: 'primitive',
            value: '10',
          },
          {name: 'primitive', value: '-'},
          {
            name: 'primitive',
            value: '10',
          },
        ],
      }),
    ).toEqual('_.__subtract__(_.__subtract__(_.__subtract__(10)(10))(10))(10)');
  });

  it('generates correct code - no operation', () => {
    expect(
      binaryOperator({
        name: 'additive',
        value: [
          {
            name: 'variable',
            value: '$',
          },
        ],
      }),
    ).toEqual('input');
  });
});
