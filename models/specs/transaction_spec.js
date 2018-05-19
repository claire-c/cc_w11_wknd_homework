const Record = require('../record.js');
const Collector = require("../collector.js");
const RecordShop = require("../recordShop.js");
const assert = require('assert');

describe('Transaction', function () {
  let record1;
  let record2;
  let record3;
  let record4;
  let collector;
  let recordShop;

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
    recordShop = new RecordShop("Backbeat Records");

  });

  it('should be able to sell a record to a collector from the record shop', function () {
    
  });


});
