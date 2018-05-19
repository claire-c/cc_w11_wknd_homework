const Transaction = function () {

};

// Transaction.prototype.checkCollectorFunds = function (collector, record) {
// return collector.hasMoneyForRecord(record);
// };

Transaction.prototype.conductTransaction = function (recordStore, collector, record) {
  if(recordStore.inStock(record) && collector.hasMoneyForRecord(record)){
      recordStore.removeRecord(record);
      collector.addRecord(record);
      collector.removeFunds(record.price);
      recordStore.addFunds(record.price);
  } else {
    return false;
  };
};

module.exports = Transaction;
