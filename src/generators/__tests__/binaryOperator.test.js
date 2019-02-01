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
    ).toEqual('_.__add__(_.__primitive__(input))(_.__primitive__(input))');
  });

  it('generates correct code - multiple operations 2', () => {
    expect(
      binaryOperator({
        name: 'multiplicative',
        value: [
          {
            name: 'primitive',
            value: '8',
          },
          {name: 'primitive', value: '*'},
          {
            name: 'primitive',
            value: '3.14',
          },
          {name: 'primitive', value: '/'},
          {
            name: 'primitive',
            value: '2',
          },
        ],
      }),
    ).toEqual(
      '_.__divide__(_.__multiply__(_.__primitive__(8))(_.__primitive__(3.14)))(_.__primitive__(2))',
    );
  });

  it('generates correct code - `10 - 10 - 10`', () => {
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
        ],
      }),
    ).toEqual(
      '_.__subtract__(_.__subtract__(_.__primitive__(10))(_.__primitive__(10)))(_.__primitive__(10))',
    );
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
    ).toEqual('_.__primitive__(input)');
  });
});
