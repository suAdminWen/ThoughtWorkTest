'use strict';

function has_num(result, item){
	for(var i of result){
		if(i == item){
			return true;
		}
	}
	return false;
}


function get_union(collection_a, collection_b) {
  //在这里写入代码
  var result = [];

  for(var itemA of collection_a){
  	if(!has_num(result, itemA)){
  		result.push(itemA);
  	}
  }
  for(var itemB of collection_b){
  	if(!has_num(result, itemB)){
  		result.push(itemB);
  	}
  }
  return result;
}

module.exports = get_union;

