'use strict';

function to_count(element, index, array){

	/* 和其之后的元素进行比较，如果有一样的就直接返回false */
	for(var i = index + 1; i < array.length; i++){
			if(array[i] == element){
				return false;
			}
	}
	return true;
}


function grouping_count(collection) {

  //在这里写入代码
  var newCollection = collection.filter(to_count);
  var result = {};
  for(var i of newCollection){
  	var count = 0;
  	for(var j of collection){
  		if(i == j){
  			count += 1;
  		}
  	}
  	result[i] = count;
  }
  return result;
}

module.exports = grouping_count;
