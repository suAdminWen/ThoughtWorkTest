'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var lenA = collection_a.length;
  var lenB = collection_b.length;
  var result = [];
  for(var i = 0; i <= lenA; i++){
  	for(var j = 0; j <=lenB; j++){
  		if(collection_a[i] % collection_b[j] == 0){
  			result.push(collection_a[i]);
  			break;
  		}
  	}
  }
  return result;
}

module.exports = choose_divisible_integer;
