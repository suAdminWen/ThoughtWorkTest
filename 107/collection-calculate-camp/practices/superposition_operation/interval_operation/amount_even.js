'use strict';

function amount_even(collection) {

  //在这里写入代码
  var new_collection = collection.filter(function(elem) {
  	return !(elem % 2);
  });
  return new_collection.reduce(function(a, b){
  	return a + b ;
  })
}

module.exports = amount_even;
