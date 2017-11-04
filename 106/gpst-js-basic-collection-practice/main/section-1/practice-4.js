'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var res=[];
  for(var i = 0; i < collectionA.length; i ++){
  	for(var j = 0; j < objectB.value.length; j ++){
  		if(collectionA[i]["key"] == objectB.value[j]){
  			res.push(collectionA[i]["key"]);
  		}
  	}
  }
  return res;
}
