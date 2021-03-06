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
    assert.strictEqual(recordStore.funds, 1100);
    assert.strictEqual(collector.funds, 3900);
  });

  it("can decline a transaction if collector has not got enough funds", function () {
    actual = transaction.conductTransaction(recordStore, collector, record3);
    assert.strictEqual(actual, false);
  });

  it("can decline a transaction if the record store doesn't have the record", function () {
    actual = transaction.conductTransaction(recordStore, collector, record4);
    assert.strictEqual(actual, false);
  });

  it("should be able to provide a refund to a customer", function () {
    recordStore.addFunds(5000);
    collector.addRecord(record1);
    transaction.conductRefund(recordStore, collector, record1);
    assert.strictEqual(recordStore.funds, 4000);
    assert.strictEqual(collector.funds, 1000);
    assert.strictEqual(recordStore.collection.length, 4);
    assert.strictEqual(collector.collection.length, 0);
  });

  it("should be able to proceed a transaction", function () {
    collector.addFunds(4000);
    actual = transaction.proceedTransaction(recordStore, collector, record1);
    assert.strictEqual(actual, true);
  });

  it("should be able to stop a transaction if collector has no funds", function () {
    actual = transaction.proceedTransaction(recordStore, collector, record1);
    assert.strictEqual(actual, false);
  })

  it("should be able to stop a transaction if record store doesn't have record", function (){
    collector.addFunds(4000);
    actual = transaction.proceedTransaction(recordStore, collector, record4);
    assert.strictEqual(actual, false);
  })

  it("should be able to continue a refund", function () {
    recordStore.addFunds(5000);
    collector.addRecord(record1);
    actual = transaction.proceedRefund(recordStore, collector, record1);
    assert.strictEqual(actual, true);
  })

  it("should be able to stop a refund if record store doesn't have funds", function () {
    collector.addRecord(record1);
    actual = transaction.proceedRefund(recordStore, collector, record1);
    assert.strictEqual(actual, false);
  })

  it("should be able to stop a refund if collector doesn't have record in collection", function () {
    recordStore.addFunds(5000);
    actual = transaction.proceedRefund(recordStore, collector, record1);
    assert.strictEqual(actual, false);
  })


});
