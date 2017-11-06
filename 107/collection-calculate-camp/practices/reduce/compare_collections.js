'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var len = collection_b.length;
  for(var i = 0; i < len; i ++){
  	if(collection_a[i] != collection_b[i]){
  		return false;
  	}
  }
  return true;
}

module.exports = compare_collections;


