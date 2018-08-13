import compiler from './compiler';

export default input => eval(compiler(input))
