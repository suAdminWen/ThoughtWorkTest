'use strict';
var number_map_to_word = function(collection){
  var result = collection.map(function(x){
  	var letter = 'abcde';
  	return letter[x-1];
  })
  return result;
};

module.exports = number_map_to_word;
