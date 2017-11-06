'use strict';
function num_to_word(num){
	var letter = "abcdefghijklmnoporstuvwxyz";
	var char = "";
	if(parseInt(num/26)){
		char += letter[parseInt(num/26)-1] + letter[num % 26];

	}else{
		char += letter[num];
	}
	return char
}

var number_map_to_word_over_26 = function(collection){
  var result = [];
  for(var i of collection){
  	result.push(num_to_word(i-1));
  }
  // var result = collection.map(num_to_word(currentValue));
  return result;
};

module.exports = number_map_to_word_over_26;
