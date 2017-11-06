'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  // 过滤奇数
  var new_collection = collection.filter(function(elem){
  	return elem % 2;
  });
  // 计算求和
  new_collection = new_collection.map(function(elem, index) {
  	return elem * 3 + 5;
  });
  var result = new_collection.reduce(function(a, b){
  	return a + b;
  });
  return result;
}
module.exports = hybrid_operation_to_uneven;

