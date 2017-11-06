/* 判断字符是否在之前出现过 */
function hasResults(results, char){
	for (var i in results){
		if(results[i]["key"] == char){
			return true;
		}
	}
	return false;
}

/* 计数 */
function countResults(results, char){
	for (var i in results){
		if(results[i]["key"] == char){
			results[i]["count"] += 1;
		}
	}
	return results;
}

/* 将输入的数据中d-5转换成d,d,d,d,d */
function changeInputType(collection){
	var newCollection = [];
	for(var i in collection){
		var coll = collection[i].split("-")
		if (coll[1]){
			for(var j=0;j<coll[1];j++){
				newCollection.push(coll[0]);
			}
		}else{
			newCollection.push(coll[0]);
		}
	}
	return newCollection;
}


function count_same_elements(collection) {
  //在这里写入代码
  var res = [];

  collection = changeInputType(collection);

  for(var i in collection){
  	if(hasResults(res, collection[i])){
  		res = countResults(res, collection[i]);
  	}else{
  		res.push({key: collection[i], count: 1});
  	}
  }
  return res;
}



module.exports = count_same_elements;
