'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum = collection.reduce(function(a, b){
  	return a + b;
  });
  var letter = 'abcdefghijklmnopqrstuvwxyz';
  var index = Math.ceil(sum / collection.length) - 1;
  return letter[index];
}


module.exports = average_to_letter;

