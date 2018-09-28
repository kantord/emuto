// @flow

import parser from '../number'
import {testExample} from './tools'

const examples = ['3.14', '-42', '0', '111.111', '0.33']

describe('number primitive parser', () => {
  examples.forEach(testExample(parser))
})
