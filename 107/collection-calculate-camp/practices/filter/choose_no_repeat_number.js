'use strict';

function is_repeat_number(element, index, array){

	/* 和其之后的元素进行比较，如果有一样的就直接返回false */
	for(var i = index + 1; i < array.length; i++){
			if(array[i] == element){
				return false;
			}
	}
	return true;
}


function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result = collection.filter(is_repeat_number);
  return result;
}

module.exports = choose_no_repeat_number;
