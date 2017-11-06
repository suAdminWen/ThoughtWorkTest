'use strict';
var number_map_to_word_over_26 = require('../../map/number_map_to_word_over_26.js');

function even_to_letter(collection) {

  //在这里写入代码
  var new_collection = collection.filter(function(element){
  	if(element % 2){
  		return false;
  	}else{
  		return true;
  	}
  });
  return number_map_to_word_over_26(new_collection);
}

module.exports = even_to_letter;
