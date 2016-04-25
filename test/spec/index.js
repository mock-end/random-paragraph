var expect = require('chai').expect;

var MIN_LEN = 2;
var MAX_LEN = 18;

describe('random-paragraph: ', function () {

  var randomParagraph = require('../../');

  it('randomParagraph()', function () {
    expect(randomParagraph()).to.be.a('string');

    for (var i = 0; i < 100; i++) {
      expect(randomParagraph().split('. ')).to.have.length.within(3, 7);
    }
  });


  it('randomParagraph({ sentences: 8 })', function () {
    expect(randomParagraph({ sentences: 8 }).split('. ')).to.have.length(8);
  });

  it('randomParagraph({ min: 8, max: 12 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomParagraph({
        min: 8,
        max: 12
      }).split('. ')).to.have.length.within(8, 12);
    }
  });

  it('randomParagraph({ max: 12 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomParagraph({
        max: 12
      }).split('. ')).to.have.length.within(MIN_LEN, 12);
    }
  });

  it('randomParagraph({ min: 8 })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomParagraph({
        min: 8
      }).split('. ')).to.have.length.within(8, MAX_LEN);
    }
  });

  it('randomParagraph({ min: "0", max: "0" })', function () {
    for (var i = 0; i < 100; i++) {
      expect(randomParagraph({
        min: '0',
        max: '0'
      }).split('. ')).to.have.length.within(MIN_LEN, MAX_LEN);
    }
  });
});
