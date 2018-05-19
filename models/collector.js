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


module.exports = Collector;
