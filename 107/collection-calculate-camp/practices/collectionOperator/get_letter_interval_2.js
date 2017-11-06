'use strict';

var letter = "abcdefghijklmnopqrstuvwxyz";

function get_letter_com(num, result){
	if(parseInt(num/26)){
		var char = ""
		char += letter[parseInt(num/26)-1] + letter[num % 26];
		result.push(char);
	}else{
		result.push(letter[num]);
	}
	return result;
}


function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  if(number_a < number_b){

  	/*这里需要注意的是传入的参数需要减一，因为数组的索引是用0开始的*/
  	for(var i = number_a; i <= number_b; i++){
  		result = get_letter_com(i-1, result);
  	}
  }else if(number_a > number_b){
  	for(var i = number_a; i >= number_b; i--){
  		result = get_letter_com(i-1, result);
  	}
  }else{
  	result = get_letter_com(number_a-1, result);
  }
  return result;
}

module.exports = get_letter_interval_2;

