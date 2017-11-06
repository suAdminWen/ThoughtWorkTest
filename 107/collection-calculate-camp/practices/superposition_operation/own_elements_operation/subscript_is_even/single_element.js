'use strict';
var single_element = function(collection){
	var even_collection = collection.filter(function(element, index) {
		return index % 2;
	});
	var len = even_collection.length;
	var result = [];
	for(var i =0; i < len; i ++){
		for(var j = 0; j < len; j ++){
			if(even_collection[i] == even_collection[j] && j != i){
			  break;
			}
			if( j == len - 1 ){
				result.push(even_collection[i]);
			}
		}
	}
	return result;
};
module.exports = single_element;
