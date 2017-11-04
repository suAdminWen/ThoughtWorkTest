'use strict';
/* 判断字符是否在之前出现过 */
function hasResults(results, char){
	for (var i in results){
		if(results[i]["name"] == char){
			return true;
		}
	}
	return false;
}

/* 计数 */
function countResults(results, char){
	for (var i in results){
		if(results[i]["name"] == char){
			results[i]["summary"] += 1;
		}
	}
	return results;
}

/* 将输入的数据中d-5转换成d,d,d,d,d */
function changeInputType(collection){
	var newCollection = [];
	for(var i in collection){

		var coll = collection[i].split("")
		var count = ""
		for(var j=1;j<coll.length;j++){
			if(!isNaN(coll[j])){  // 判断分割的字符是否为数字，是则进行拼接
				count += coll[j].toString();
			}
		}
		if (count){  // 如果count为空，则只需要加一次。
			for(var j=0;j<count;j++){
				newCollection.push(coll[0]);
			}
		}else{
			newCollection.push(coll[0]);
		}
	}
	return newCollection;
}

module.exports = function countSameElements(collection) {
  var res = [];

  collection = changeInputType(collection);

  for(var i in collection){
  	if(hasResults(res, collection[i])){
  		res = countResults(res, collection[i]);
  	}else{
  		res.push({name: collection[i], summary: 1});
  	}
  }
  return res;
}