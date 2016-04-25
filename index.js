'use strict';

var clamp          = require('clamp');
var randomNatural  = require('random-natural');
var randomSentence = require('random-sentence');

var MIN_LEN = 2;
var MAX_LEN = 18;

module.exports = function (options) {

  options = options || {
      sentences: randomNatural({
        min: 3,
        max: 7,
        inspected: true
      })
    };

  var length = options.sentences;

  if (!length && (options.min || options.max)) {
    length = randomNatural({
      min: options.min || MIN_LEN,
      max: options.max || MAX_LEN
    });
  }

  length = length || randomNatural({
      min: MIN_LEN,
      max: MAX_LEN,
      inspected: true
    });

  length = clamp(length, MIN_LEN, MAX_LEN);

  var sentences = [];

  while (length--) {
    sentences.push(randomSentence());
  }

  return sentences.join(' ');
};
