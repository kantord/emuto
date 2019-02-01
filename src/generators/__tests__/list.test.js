import list from '../list';

const segment = {
  name: 'simpleList',
  value: [
    {
      name: 'variable',
      value: '$',
    },
    {
      name: 'variable',
      value: '$',
    },
    {
      name: 'list',
      value: [
        {
          name: 'simpleList',
          value: [{name: 'primitive', value: 'null'}],
        },
      ],
    },
  ],
};

describe('list generator', () => {
  it('generates correct code', () => {
    expect(
      list({
        name: 'list',
        value: [
          {
            name: 'simpleList',
            value: [],
          },
        ],
      }),
    ).toEqual('_.__primitive__(Array.from([]))');
  });

  it('generates correct code', () => {
    expect(
      list({
        name: 'list',
        value: [segment],
      }),
    ).toEqual(
      '_.__primitive__(Array.from([_.__primitive__(input), _.__primitive__(input), _.__primitive__(Array.from([_.__primitive__(null)]))]))',
    );
  });

  it('generates correct code - spread', () => {
    expect(
      list({
        name: 'list',
        value: [
          segment,
          {
            name: 'spread',
            value: {
              name: 'variable',
              value: '$',
            },
          },
          {
            name: 'spread',
            value: {
              name: 'variable',
              value: '$',
            },
          },
        ],
      }),
    ).toEqual(
      '_.__primitive__(_.__first__(_.__primitive__(_.__first__(_.__primitive__(Array.from([_.__primitive__(input), _.__primitive__(input), _.__primitive__(Array.from([_.__primitive__(null)]))])).concat(_.__spread__(input)))).concat(_.__spread__(input))))',
    );
  });
});
