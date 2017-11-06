'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var result = [];
  for(var i of collection){
  	if ( i % 2 == 0){
  		result.push(i);
  	}
  }
  return result;
}

module.exports = collect_all_even;
