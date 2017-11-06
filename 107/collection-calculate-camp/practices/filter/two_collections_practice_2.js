'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var lenA = collection_a.length;
  var lenB = collection_b.length;
  var result = [];
  for(var i = 0; i <= lenA; i++){
  	for(var j = 0; j <=lenB; j++){
  		if(collection_a[i] == collection_b[j]){
  			break;
  		}
  		if(j == lenB){
  			result.push(collection_a[i]);
  		}
  	}
  }
  return result;
}

module.exports = choose_no_common_elements;
