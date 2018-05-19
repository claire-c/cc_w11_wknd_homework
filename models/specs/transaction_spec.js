const Record = require('../record.js');
const Collector = require("../collector.js");
const RecordStore = require("../recordStore.js");
const Transaction = require("../transaction.js");
const assert = require('assert');

describe('Transaction', function () {
  let record1;
  let record2;
  let record3;
  let record4;
  let collector;
  let recordStore;
  let transaction;

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
      title: "Tubular Bells",
      artist: "Mike Oldfield",
      genre: "rock",
      price: 3000
    });

    collector = new Collector();
    collection = [record1, record2, record3];
    recordStore = new RecordStore("Backbeat Records");
    transaction = new Transaction();
    recordStore.addManyRecords(collection);
  });

  it("can confirm there are not enough funds for collector to buy record", function () {
    actual = transaction.checkCollectorFunds(collector, record1);
    assert.strictEqual(actual, false);
  });

  it("can confirm there are enough funds for collector to buy record", function () {
    collector.addFunds(5000);
    actual = transaction.checkCollectorFunds(collector, record1);
    assert.strictEqual(actual, true);
  });

  xit("can decline a transaction if collector has not got enough funds", function () {

  });

  xit("can decline a transaction if the record shop doesn't have the record", function () {

  });

  xit('should be able to sell a record to a collector from the record shop', function () {

  });


});
