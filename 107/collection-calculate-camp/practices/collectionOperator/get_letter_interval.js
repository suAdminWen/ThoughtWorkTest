'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var letter = "abcdefghijklmnopqrstuvwxyz";
  var result = [];
  if(number_a < number_b){
  	for(var i = number_a; i <= number_b; i++){
  		result.push(letter[i-1]);
  	}
  }else if(number_a > number_b){
  	for(var i = number_a; i >= number_b; i--){
  		result.push(letter[i-1]);
  	}
  }else{
  	result.push(letter[number_a-1]);
  }
  return result;
}

module.exports = get_letter_interval;
