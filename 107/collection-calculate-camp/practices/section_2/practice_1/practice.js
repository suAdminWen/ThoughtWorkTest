function hasResults(results, char){
	for (var i in results){
		if(results[i]["key"] == char){
			return true;
		}
	}
	return false;
}

function countResults(results, char){
	for (var i in results){
		if(results[i]["key"] == char){
			results[i]["count"] += 1;
		}
	}
	return results;
}


function count_same_elements(collection) {
  //在这里写入代码
  var res = [];
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
