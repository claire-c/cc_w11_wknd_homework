const Transaction = function () {

};

Transaction.prototype.checkCollectorFunds = function (collector, record) {
  if(collector.funds >= record.price){
    return true
  } else {
    return false
  };
}



module.exports = Transaction;
