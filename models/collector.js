const Collector = function () {
  this.funds = 0;
  this.collection = [];
};

Collector.prototype.addFunds = function (funds) {
  this.funds += funds;
};

Collector.prototype.removeFunds = function (funds) {
  this.funds -= funds;
};

Collector.prototype.addRecord = function (record) {
  this.collection.push(record);
};

Collector.prototype.addManyRecords = function (recordArray) {
  recordArray.forEach((record) => {
    this.collection.push(record);
  });
};

Collector.prototype.findRecordByTitle = function (recordTitle) {
  const recordArray = this.collection.filter((record) => {
    return record.title === recordTitle;
  });
  return recordArray;
};

Collector.prototype.removeRecord = function (recordToRemove) {
  const recordArray = this.collection.filter((record) => {
    return record != recordToRemove
  });
  this.collection = recordArray;
};

Collector.prototype.hasMoneyForRecord = function (record) {
  if(this.funds >= record.price){
    return true
  } else {
    return false
  };
};

//Have used a ternary here - see array sort method on docs for full if statement.
Collector.prototype.sortRecordsByArtist = function () {
  this.collection.sort((record1, record2) => {
    var artistA = record1.artist;
    var artistB = record2.artist;
    return (artistA < artistB) ? -1 : (artistA > artistB) ? 1 : 0;
  });
};

Collector.prototype.ownsRecord = function (recordToCheck) {
  return this.collection.includes(recordToCheck);
};

module.exports = Collector;
