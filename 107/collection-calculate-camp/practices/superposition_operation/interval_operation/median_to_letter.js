'use strict';
var number_map_to_word_over_26 = require('../../map/number_map_to_word_over_26.js');
var compute_chain_median = require("../../reduce/compute_chain_median");

function median_to_letter(collection) {

  // 获取中位数，并向上取整，然后封装在数组中。
  var new_collection = [Math.ceil(compute_chain_median(collection))];
  // 直接获取对用的字母，注意函数返回的是一个数组。
  return number_map_to_word_over_26(new_collection)[0];
}

module.exports = median_to_letter;
