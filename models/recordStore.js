const RecordStore = function (name) {
  this.name = name;
  this.funds = 0;
  this.collection = [];
};

RecordStore.prototype.addRecord = function(record) {
  this.collection.push(record);
};

RecordStore.prototype.addManyRecords = function(recordArray) {
  recordArray.forEach((record) => {
    this.collection.push(record);
  });
};

RecordStore.prototype.removeRecord = function(recordToRemove) {
  const recordArray = this.collection.filter((record) => {
    return record != recordToRemove;
  });
  this.collection = recordArray;
};

RecordStore.prototype.inStock = function(recordToCheck) {
    return this.collection.includes(recordToCheck);
};

RecordStore.prototype.findRecordsByGenre = function (genre) {
  return this.collection.filter((record) => {
    return record.genre === genre;
  });
};

RecordStore.prototype.findRecordsByTitle = function (title) {
  return this.collection.filter((record) => {
    return record.title === title;
  });
};


module.exports = RecordStore;
