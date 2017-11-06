'use strict';
var calculate_average = function(collection){
	var new_collection = collection.filter(function(elem, index) {
		return (index % 2);
	});
	var sum = new_collection.reduce(function(a, b){
		return a + b;
	});
	return sum / new_collection.length;
};
module.exports = calculate_average;
