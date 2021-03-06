const Record = require('../record.js');
const RecordStore = require('../recordStore.js')
const assert = require('assert');

describe('RecordStore', function () {
  let record1;
  let record2;
  let record3;
  let record4;
  let record5;
  let recordStore;

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

    recordStore = new RecordStore("Backbeat Records");
  });

  it('should have a name', function () {
    assert.strictEqual(recordStore.name, "Backbeat Records");
  });

  it("should start with an empty collection of records", function () {
    assert.strictEqual(recordStore.collection.length, 0);
  });

  it("should start with empty funds", function () {
    assert.strictEqual(recordStore.funds, 0);
  });

  it("should be able to add funds", function () {
    recordStore.addFunds(5000);
    assert.strictEqual(recordStore.funds, 5000);
  });

  it("should be able to remove funds", function () {
    recordStore.addFunds(5000);
    recordStore.removeFunds(2500);
    assert.strictEqual(recordStore.funds, 2500);
  });

  it("should be able to add a record to the collection", function () {
    recordStore.addRecord(record1);
    assert.strictEqual(recordStore.collection.length, 1);
  });

  it("should be able to add many records to the collection", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    assert.strictEqual(recordStore.collection.length, 4);
  });

  it("should be able to remove a record", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    recordStore.removeRecord(record1);
    assert.strictEqual(recordStore.collection.length, 3);
  });

  it("can check to see if a record is in stock - in stock", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    actual = recordStore.inStock(record1);
    assert.strictEqual(actual, true);
  });

  it("can check to see if a record is in stock - not in stock", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    actual = recordStore.inStock(record5);
    assert.strictEqual(actual, false);
  });

  it("can find all records by genre", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    actual = recordStore.findRecordsByGenre("rock");
    assert.strictEqual(actual.length, 2);
  });

  it("will return an empty array when no records of genre found", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    actual = recordStore.findRecordsByGenre("lizard");
    assert.strictEqual(actual.length, 0);
  })

  it("can find all records by genre even with strange casing", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    actual = recordStore.findRecordsByGenre("ROCK");
    assert.strictEqual(actual.length, 2);
  });

  it("can find all records by title", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    actual = recordStore.findRecordsByTitle("Thriller");
    assert.deepStrictEqual(actual[0], record3);
  });

  it("will return an empty array when no titles found", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    actual = recordStore.findRecordsByTitle("lizard");
    assert.strictEqual(actual.length, 0);
  })

  it("will return records by title even with strange casing", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    actual = recordStore.findRecordsByTitle("THRILLER");
    assert.deepStrictEqual(actual[0], record3);
  });

  it("will find all records by artist", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    actual = recordStore.findRecordsByArtist("Eagles");
    assert.deepStrictEqual(actual[0], record1);
  });

  it("will return an empty array when no artists found", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    actual = recordStore.findRecordsByArtist("Pink Floyd");
    assert.strictEqual(actual.length, 0);
  });

  it("will find all records by artist even with strange casing", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    actual = recordStore.findRecordsByArtist("EAGLES");
    assert.deepStrictEqual(actual[0], record1);
  });

  it("should be able to tell if a record's keys and values matches a search object's keys and values - true", function () {
    const searchTerm = {genre: "rock", artist: "Eagles"};
    actual = recordStore.searchKeysMatch(searchTerm, record1);
    assert.strictEqual(actual, true);
  });

  it("should be able to tell if a record's keys and values matches a search object's keys and values - false", function () {
    const searchTerm = {genre: "roc", artist: "Eagles"};
    actual = recordStore.searchKeysMatch(searchTerm, record1);
    assert.strictEqual(actual, false);
  });

  it("should be able to tell if a record's keys and values matches a search object's keys and values - another false", function () {
    const searchTerm = {gene: "rock", artist: "Eagles"};
    actual = recordStore.searchKeysMatch(searchTerm, record1);
    assert.strictEqual(actual, false);
  });

  it("should be able to find all records by single property - true", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    const searchTerm = {genre: "rock"};
    actual = recordStore.search(searchTerm);
    assert.strictEqual(actual.length, 2);
  });

  it("should be able to find all records by multiple properties - true", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    const searchTerm = {title: "Thriller", artist: "Michael Jackson"};
    actual = recordStore.search(searchTerm);
    assert.deepStrictEqual(actual[0], record3);
  });

  it("should be able to return an empty array if search term is not found", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    const searchTerm = {rabbit: "Peter"};
    actual = recordStore.search(searchTerm);
    assert.strictEqual(actual.length, 0);
  });

  it("should be able to return an empty array if search term is not found on multiple properties", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    const searchTerm = {rabbit: "Peter", artist: "Eagles"};
    actual = recordStore.search(searchTerm);
    assert.strictEqual(actual.length, 0);
  });

  it("should be able to sell record", function () {
    const recordArray = [record1, record2, record3, record4];
    recordStore.addManyRecords(recordArray);
    recordStore.sellRecord(record1);
    assert.strictEqual(recordStore.collection.length, 3);
  });

  it("should be able to refund a record", function () {
    recordStore.addFunds(5000);
    actual = recordStore.canRefund(record1);
    assert.strictEqual(actual, true);
  })

});
