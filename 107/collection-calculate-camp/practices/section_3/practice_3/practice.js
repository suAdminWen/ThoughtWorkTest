const countSameElements = require('../../section_2/practice_2/practice');


function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collectionC = countSameElements(collection_a)
  var collectionB = object_b["value"];

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

module.exports = create_updated_collection;
