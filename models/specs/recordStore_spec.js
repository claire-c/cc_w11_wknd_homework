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



});
