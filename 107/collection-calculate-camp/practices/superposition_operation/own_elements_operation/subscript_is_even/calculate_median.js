'use strict';
var compute_chain_median = require("../../../reduce/compute_chain_median");

var calculate_median = function(collection){
	var even_collection = collection.filter(function(index) {
		return !(index % 2);
	});
	return compute_chain_median(even_collection);
};
module.exports = calculate_median;
