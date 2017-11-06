'use strict';
var even_asc_odd_desc = function(collection){
	// 奇、偶分开算，选择、排序，最后再合并到一起。
	var even_number = collection.filter(function(elem) {
		return !(elem % 2);
	}).sort(function(a, b){
		return a - b;
	});
	var odd_number = collection.filter(function(elem) {
		return elem % 2;
	}).sort(function(a, b){
		return b -a;
	});
	var result = even_number.concat(odd_number);
	return result;
};
module.exports = even_asc_odd_desc;
