'use strict';
const countSameElements = require('../section-2/practice-1');

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var collectionC = countSameElements(collectionA)
  var collectionB = objectB["value"];

  for(var i in collectionB){
  	for(var j in collectionC){
  		if(collectionB[i] == collectionC[j]["key"]){
  			var count = collectionC[j]["count"] / 3;
  			collectionC[j]["count"] -= parseInt(count)
  		}
  	}
  }
  return collectionC;
}