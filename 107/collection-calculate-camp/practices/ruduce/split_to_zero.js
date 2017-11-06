'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [];
  while(number > 0){
  	// 这里对浮点数进行先保留一位小数（这个时候为字符串），然后再转换成浮点数
  	number = parseFloat(number.toFixed(1))
  	result.push(number);
  	number -= interval;  // 浮点数的加减不是精确的，需要进行处理
  	number = parseFloat(number.toFixed(1))
  }
  result.push(number);
	return result;
}

module.exports = spilt_to_zero;
