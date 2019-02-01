export default x =>
  `function(inputs) {return _.__map_generator__(inputs, (function(input) { return ${x}}))}`;
