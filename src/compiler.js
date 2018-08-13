import primitive_parser from './parsers/primitive';
import primitive_generator from './generators/primitive';

export default input => primitive_generator(primitive_parser.parse(input).value);
