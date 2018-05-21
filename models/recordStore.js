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

RecordStore.prototype.addFunds = function (funds) {
  this.funds += funds;
};

RecordStore.prototype.removeFunds = function (funds) {
  this.funds -= funds;
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
    return record.genre.toLowerCase() === genre.toLowerCase();
  });
};

RecordStore.prototype.findRecordsByTitle = function (title) {
  return this.collection.filter((record) => {
    return record.title.toLowerCase() === title.toLowerCase();
  });
};

RecordStore.prototype.findRecordsByArtist = function (artist) {
  return this.collection.filter((record) => {
    return record.artist.toLowerCase() === artist.toLowerCase();
  });
};



//To check that the search object's keys and values match the record keys and values.
RecordStore.prototype.searchKeysMatch = function (searchTerm, record) {
  const searchTermKeysArray = Object.keys(searchTerm);
  const stringArray = [];

  searchTermKeysArray.forEach((searchKey) => {
    if (searchTerm[searchKey] === record[searchKey]) {
      stringArray.push(true);
    } else {
    stringArray.push(false);
  }
  });
  return stringArray.every((string) => {
    return string === true;
  });
}

RecordStore.prototype.search = function (searchTerm) {
  const matchedSearchTerms = [];

  this.collection.forEach((record) => {
    if (this.searchKeysMatch(searchTerm, record)){
      matchedSearchTerms.push(record);
    }
  });
  return matchedSearchTerms;

}






module.exports = RecordStore;
