const RecordStore = function (name) {
  this.name = name;
  this.funds = 0;
  this.collection = [];
};

RecordStore.prototype.addRecord = function(record) {
  this.collection.push(record);
}

RecordStore.prototype.addManyRecords = function(recordArray) {
  recordArray.forEach((record) => {
    this.collection.push(record);
  });
}

RecordStore.prototype.removeRecord = function(recordToRemove) {
  const recordArray = this.collection.filter((record) => {
    return record != recordToRemove;
  });
  this.collection = recordArray;
}


module.exports = RecordStore;
