'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var new_collection = collection.filter(function(elem) {
  	return elem % 2;
  });
  var sum = new_collection.reduce(function(a, b){
  	return a + b ;
  });

  return sum / new_collection.length;
}

module.exports = average_uneven;
