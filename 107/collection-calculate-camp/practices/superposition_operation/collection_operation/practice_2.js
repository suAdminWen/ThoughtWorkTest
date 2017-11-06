'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  // 过滤奇数
  var new_collection = collection.filter(function(elem){
  	return elem % 2;
  });
  // 计算求和
  var result  = new_collection.map(function(elem, index) {
  	return elem * 3 + 2;
  });
  return result;
}

module.exports = hybrid_operation_to_uneven;

