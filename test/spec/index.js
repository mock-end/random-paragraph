'use strict';

var expect = require('chai').expect;


describe('random-paragraph: ', function () {

  var randomParagraph = require('../../');

  it('randomParagraph()', function () {
    expect(randomParagraph()).to.be.a('string');

    for (var i = 0; i < 100; i++) {
      expect(randomParagraph().split('. ')).to.have.length.within(1, 20);
    }
  });


  it('randomParagraph(8)', function () {
    expect(randomParagraph(8).split('. ')).to.have.length.within(1, 8);
  });

  it('randomParagraph(8, 8)', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomParagraph(8, 8).split('. ').length).to.be.equal(8);
    }
  });
});
