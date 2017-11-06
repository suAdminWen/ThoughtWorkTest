'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  if(typeof(collection) == "string"){
    collection = collection.split("->");
  }
  collection = collection.sort(function(a, b){return a - b});
  var len = collection.length;
  if(len%2){
  	return collection[parseInt(len/2)];  
  }else{
  	return (parseInt(collection[len/2-1]) + parseInt(collection[len/2]))/2;
  }
}

module.exports = compute_chain_median;
