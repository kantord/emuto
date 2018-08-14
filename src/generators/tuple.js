import primitive from './primitive'

export default ({value}) =>
  (([left, right]) => `[${left},${right}]`)(value.map(primitive))
