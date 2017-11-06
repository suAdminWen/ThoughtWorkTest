'use strict';

function get_number(item, result){
	if(typeof(item) == 'number'){
		return result.push(item);
	}else{
		for(var i of item){
			get_number(i, result);
		}
	}
}


function double_to_one(collection) {

  //在这里写入代码
  var result = [];
  get_number(collection, result);
  return result;

}

module.exports = double_to_one;
