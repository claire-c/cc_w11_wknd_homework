const Transaction = function () {

};

Transaction.prototype.conductTransaction = function (recordStore, collector, record) {
  if(this.proceedTransaction(recordStore, collector, record)){
      recordStore.sellRecord(record);
      collector.buyRecord(record);
  } else {
      return false;
  }
};

Transaction.prototype.conductRefund = function (recordStore, collector, record) {
  if (this.proceedRefund(recordStore, collector, record)){
    recordStore.removeFunds(record.price);
    collector.addFunds(record.price);
    recordStore.collection.push(record);
    collector.removeRecord(record);
  }
  else {
    return false;
  }
};

Transaction.prototype.proceedTransaction = function (recordStore, collector, record) {
  return recordStore.inStock(record) && collector.hasMoneyForRecord(record);
}

Transaction.prototype.proceedRefund = function (recordStore, collector, record) {
  return recordStore.canRefund(record) && collector.ownsRecord(record);
}

module.exports = Transaction;
