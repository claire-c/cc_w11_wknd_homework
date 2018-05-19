const Transaction = function () {

};

Transaction.prototype.conductTransaction = function (recordStore, collector, record) {
  if(recordStore.inStock(record) && collector.hasMoneyForRecord(record)){
      recordStore.removeRecord(record);
      collector.addRecord(record);
      collector.removeFunds(record.price);
      recordStore.addFunds(record.price);
  } else {
      return false;
  }
};

Transaction.prototype.conductRefund = function (recordStore, collector, record) {
  if (recordStore.funds >= record.price && collector.ownsRecord(record)){
    recordStore.removeFunds(record.price);
    collector.addFunds(record.price);
    recordStore.collection.push(record);
    collector.removeRecord(record);
  }
  else {
    return false;
  }
};

module.exports = Transaction;
