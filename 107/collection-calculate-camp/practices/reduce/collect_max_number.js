'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var max = collection.reduce(function(a, b) {
    return Math.max(a, b);
  });
  return max;
}

module.exports = collect_max_number;
