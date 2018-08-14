import PrimitiveParser from './parsers/primitive'
import PrimitiveGenerator from './generators/primitive'

export default input => PrimitiveGenerator(PrimitiveParser.parse(input).value)
