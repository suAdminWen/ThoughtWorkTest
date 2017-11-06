'use strict';
var is_exist_element = function(collection,element){
	var even_collment = collection.filter(function(index) {
		return index % 2;
	});
	for(var i of even_collment){
		if(i == element){
			return true;
		}
	}
	return false;
};
module.exports = is_exist_element;
