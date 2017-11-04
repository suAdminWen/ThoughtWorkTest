'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var collectionB = objectB["value"];
  
  for(var i in collectionB){
  	for(var j in collectionA){
  		if(collectionB[i] == collectionA[j]["key"]){
  			collectionA[j]["count"] -=1;
  		}
  	}
  }
  return collectionA;
}
