'use strict';
var to_one = require("./double_dimensional_array_to_one_1");

function has_collection(result, item){
	for(var i in result){
		if(item == i){
			return true;
		}
	}
	return false;
}

function double_to_one(collection) {

  //在这里写入代码
  var one_collection = [];
  var result = [];
  one_collection = to_one(collection);

  for (var i = 0; i < one_collection.length; i++){
  	if (!has_collection(result, one_collection[i])){
  		result.push(one_collection[i]);
  	}
  }
  return result;

  
}

module.exports = double_to_one;
