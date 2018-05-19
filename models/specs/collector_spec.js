const Record = require('../record.js');
const Collector = require('../collector.js');
const assert = require('assert');

describe('Collector', function () {
  let record1;
  let record2;
  let record3;
  let record4;
  let collector;

  beforeEach(function () {
    record1 = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });

    record2 = new Record({
      title: "Let's Dance",
      artist: "David Bowie",
      genre: "rock",
      price: 1500
    });

    record3 = new Record({
      title: "Thriller",
      artist: "Michael Jackson",
      genre: "pop",
      price: 1100
    });

    record4 = new Record({
      title: "An Awesome Wave",
      artist: "Alt J",
      genre: "indie",
      price: 2000
    });

    collection = [record1, record2, record3, record4];

    collector = new Collector(collection);

  });

  it('should be able to see collectors records', function () {
    assert.strictEqual(collector.collection.length, 4);
  });

  it("should be able to see empty funds", function() {
    assert.strictEqual(collector.funds, 0);
  });

  it("should be able to add funds to collector", function(){
    collector.addFunds(5000);
    assert.strictEqual(collector.funds, 5000);
  });

});
