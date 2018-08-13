import Parsimmon from 'parsimmon';

import BooleanParser from './primitives/boolean';
import NullParser from './primitives/null';

export default Parsimmon.alt(BooleanParser, NullParser);
