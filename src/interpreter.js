import compiler from './compiler'

export default input => eval(compiler(input)) // eslint-disable-line no-eval
