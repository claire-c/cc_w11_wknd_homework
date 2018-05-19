const Record = require('../record.js');
const Collector = require('../collector.js');
const assert = require('assert');

describe('Collector', function () {
  let record1;
  let record2;
  let record3;
  let record4;
  let record5;
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

    record5 = new Record({
      title: "Backspace Unwind",
      artist: "Lamb",
      genre: "electronic",
      price: 1000
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

  it("should be able to remove funds from collector", function() {
    collector.addFunds(5000);
    collector.removeFunds(2500);
    assert.strictEqual(collector.funds, 2500);
  });

  it("should be able to add record to collector's collection", function(){
    collector.addRecord(record5);
    assert.strictEqual(collector.collection.length, 5);
  });

  it("should be able to find record by title", function () {
    actual = collector.findRecordByTitle("Thriller");
    assert.strictEqual(actual[0].title, "Thriller");
  });

  it("should be able to return an empty array if there is no record by title", function () {
    actual = collector.findRecordByTitle("lizard");
    assert.strictEqual(actual.length, 0);
  });

  it("should be able to remove a record from the collector's collection", function () {
    collector.removeRecord(record4);
    assert.strictEqual(collector.collection.length, 3);
  });

});
