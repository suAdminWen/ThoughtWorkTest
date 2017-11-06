'use strict';


function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result = [];
  for(var itemA of collection_a){
  	for(var itemB of collection_b){
  		if (itemB==itemA){
  			result.push(itemB);
  		}
  	}
  }
  return result;
}

module.exports = choose_common_elements;
