'use strict';

var clamp          = require('clamp');
var randomNatural  = require('random-natural');
var randomSentence = require('random-sentence');


module.exports = function (min, max) {

  var length = arguments.length;

  if (length === 0) {
    min = 1;
    max = 20;
  } else if (length === 1) {
    max = min;
    min = 1;
  }

  length = randomNatural(min, max);
  length = clamp(length, 1, 20);

  var sentences = [];

  while (length--) {
    sentences.push(randomSentence(5, 20));
  }

  return sentences.join(' ');
};
