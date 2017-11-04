'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var collectionB = objectB["value"];
  
  for(var i in collectionB){
  	for(var j in collectionA){
  		if(collectionB[i] == collectionA[j]["key"]){

  			var count = collectionA[j]["count"] / 3;
  			collectionA[j]["count"] -= parseInt(count);  // 向下取整
  		}
  	}
  }
  return collectionA;
}
