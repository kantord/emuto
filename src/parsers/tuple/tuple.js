import Parsimmon from 'parsimmon';

import PrimitiveParser from '../primitive';

export default Parsimmon.seq(
  PrimitiveParser,
  Parsimmon.optWhitespace,
  Parsimmon.string(':'),
  Parsimmon.optWhitespace,
  PrimitiveParser,
).map(children => ({
  type: 'tuple',
  value: [children[0], children[4]],
}));
