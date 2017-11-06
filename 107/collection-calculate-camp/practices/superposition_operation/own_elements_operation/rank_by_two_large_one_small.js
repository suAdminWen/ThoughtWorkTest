'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  var new_collection = collection.sort(function(a, b){
  	return a - b;
  });
  var len = new_collection.length;
  for(var i = 0; i < len; i ++){
  	if(i % 3 == 0 && new_collection[i+2]){
  		var item = new_collection[i];
  		new_collection[i] = new_collection[i+1];
  		new_collection[i+1] = new_collection[i+2];
  		new_collection[i+2] = item;
  	}
  }
  return new_collection;
}
module.exports = rank_by_two_large_one_small;
