'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  for (var i of collection_b){
  	for(var j of collection_a){
  		if(i == j){
  			result.push(i);
  		}
  	}
  }
  return result;
}

module.exports = get_intersection;
