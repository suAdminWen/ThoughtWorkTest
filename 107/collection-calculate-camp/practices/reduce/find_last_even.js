'use strict';

var find_first_event = require("./find_first_even")

function find_last_even(collection) {
  //在这里写入代码
  return find_first_event(collection.reverse())
}

module.exports = find_last_even;
