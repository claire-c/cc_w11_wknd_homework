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

  it("can conduct transaction between store and collector", function () {
    collector.addFunds(5000);
    transaction.conductTransaction(recordStore, collector, record3);
    assert.strictEqual(collector.collection.length, 1);
    assert.strictEqual(recordStore.collection.length, 2);
  });

  it("can decline a transaction if collector has not got enough funds", function () {
    actual = transaction.conductTransaction(recordStore, collector, record3);
    assert.strictEqual(actual, false);
  });

  it("can decline a transaction if the record store doesn't have the record", function () {
    actual = transaction.conductTransaction(recordStore, collector, record4);
    assert.strictEqual(actual, false);
  });


});
