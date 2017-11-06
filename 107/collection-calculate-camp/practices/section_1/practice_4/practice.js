function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var res=[];
  for(var i = 0; i < collection_a.length; i ++){
  	for(var j = 0; j < object_b.value.length; j ++){
  		if(collection_a[i]["key"] == object_b.value[j]){
  			res.push(collection_a[i]["key"]);
  		}
  	}
  }
  return res;
}

module.exports = collect_same_elements;
