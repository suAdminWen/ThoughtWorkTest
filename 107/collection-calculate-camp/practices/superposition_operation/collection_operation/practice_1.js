'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var new_collection = collection.map(function(elem, index) {
  	return elem * 3 + 2;
  });
  var result = new_collection.reduce(function(a, b){
  	return a + b;
  });
  return result;
}

module.exports = hybrid_operation;

