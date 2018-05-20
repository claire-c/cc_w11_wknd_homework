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

//To check that the search object's keys match the record keys.
RecordStore.prototype.searchKeysMatch = function (searchTerm, record) {
  const searchTermKeysArray = Object.keys(searchTerm);
  const booleanArray = [];

  searchTermKeysArray.forEach((searchKey) => {
    if (searchTerm[searchKey] === record[searchKey]) {
      booleanArray.push("true");
    } else {
    booleanArray.push("false");
  }
  });
  return booleanArray.every((string) => {
    return string === "true";
  });
}

// (Object.keys(searchTerm).forEach((searchKey) => {
//   if (searchTerm[searchKey] != record[searchKey]) {
//     return false
//   }
// })
// return true;


// RecordStore.prototype.search = function (searchTerm) {
//   //Object.keys(searchTerm) will get the keys of the search term in an array.
//   //Object.values(searchTerm) will get the values of the search term in an array.
//   const matchedSearchTerms = [];
//   this.collection.forEach((record) => {
//     if (Object.values(searchTerm).includes(record.title || record.artist || record.genre || record.price){
//       matchedSearchTerms.push(record);
//     } )
//   });
//   return matchedSearchTerms;
// }

// RecordStore.prototype.search = function (searchTerm) {
//   const matchedSearchTerms = [];
//   this.collection.forEach((record) => {
//     if (haveAMatch(searchTerm, record)){
//       matchedSearchTerms.push(record);
//     } )
//   });
//   return matchedSearchTerms;
// }

//



module.exports = RecordStore;
