'use strict';
function group(result, chars){
	var index;
	if(chars<10){
		index = 0;
	}else if(chars < 100){
		index = 1;
	}else {
		index = 2;
	}
	result[index].push(chars);

	return result;
}

var even_group_calculate_average = function(collection){
	var even_collection = collection.filter(function(element, index) {
		return index % 2;
	});
	var result = [[], [], []];
	for(var k of even_collection){
		if(k % 2 == 0){
			result = group(result, k);
		}
	}
	for(var i = 0; i < 3; i ++){
		var len = result[i].length;
		if(len){
			var sum = result[i].reduce(function(a, b){ return a + b; });
			result[i] = sum / len;
		}
	}


  // 可怕的 [] != []
	if((typeof result[0]) === 'object'){
	  if((typeof result[1]) === 'object'){
	    if ((typeof result[2]) === 'object'){
	      result = [0];
      }else {
	      result = [result[2]];
      }
    }
  }
  return result;
};
module.exports = even_group_calculate_average;
