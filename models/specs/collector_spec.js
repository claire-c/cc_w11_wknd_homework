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
      price 1100
    });

    record4 = new Record({
      title: "An Awesome Wave",
      artist: "Alt J",
      genre: "indie",
      price 2000
    });

    collection = [record1, record2, record3, record4];

    collector = new Collector(collection);

  });

  it('should have a title', function () {
    assert.strictEqual(record.title, 'Their Greatest Hits 1971 - 1975');
  });
