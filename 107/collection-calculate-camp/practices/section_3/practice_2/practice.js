function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collectionB = object_b["value"];
  
  for(var i in collectionB){
  	for(var j in collection_a){
  		if(collectionB[i] == collection_a[j]["key"]){

  			var count = collection_a[j]["count"] / 3;
  			collection_a[j]["count"] -= parseInt(count);  // 向下取整
  		}
  	}
  }
  return collection_a;
}

module.exports = create_updated_collection;
