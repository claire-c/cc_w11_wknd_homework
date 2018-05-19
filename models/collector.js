const Collector = function () {
  this.funds = 0;
  this.collection = [];
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

Collector.prototype.addManyRecords = function (recordArray) {
  recordArray.forEach((record) => {
    this.collection.push(record);
  });
}

Collector.prototype.findRecordByTitle = function (recordTitle) {
  const recordArray = this.collection.filter((record) => {
    return record.title === recordTitle;
  });
  return recordArray;
}

Collector.prototype.removeRecord = function (recordToRemove) {
  const recordArray = this.collection.filter((record) => {
    return record != recordToRemove
  });
  this.collection = recordArray;
}






















module.exports = Collector;
