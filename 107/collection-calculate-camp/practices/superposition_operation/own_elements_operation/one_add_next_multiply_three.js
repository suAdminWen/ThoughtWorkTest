'use strict';
function one_add_next_multiply_three(collection){
  var len = collection.length - 1;
  var result = [];
  for(var i=0; i < len; i ++){
  	result.push((collection[i] + collection[i+1])*3);
  }
  return result;
}
module.exports = one_add_next_multiply_three;
