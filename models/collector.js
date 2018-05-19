const Collector = function (collection) {
  this.funds = 0;
  this.collection = collection;
};

Collector.prototype.addFunds = function (funds) {
  this.funds += funds;
}

Collector.prototype.removeFunds = function (funds) {
  this.funds -= funds;
}

Collector.prototype.addRecord = function (record) {
  this.collection.push(record);
}

Collector.prototype.findRecordByTitle = function (recordTitle) {
  recordArray = this.collection.filter((record) => {
    return record.title === recordTitle;
  });
  return recordArray;
}



module.exports = Collector;
