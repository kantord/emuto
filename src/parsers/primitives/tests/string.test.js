// @flow

import parser from '../string'
import {testExample} from './tools'

const examples = [`""`, `"foo"`, `"Fo bar ²¡ü"`]

describe('string primitive parser', () => {
  examples.forEach(testExample(parser))
})
