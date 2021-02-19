/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if ((typeof (amount) !== 'number') || amount <= 0 || isNaN(amount)) {
    return false;
  }
  var transaction = new Transaction('deposit', amount);
  this.transactions.push(transaction);
  return true;
};

Account.prototype.withdraw = function (amount) {
  if (typeof (amount) !== 'number' || amount <= 0 || isNaN(amount)) {
    return false;
  }
  var transaction = new Transaction('withdrawal', amount);
  this.transactions.push(transaction);
  return true;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    var transaction = this.transactions[i];
    if (transaction.type === 'deposit') {
      balance += transaction.amount;
    } else {
      balance -= transaction.amount;
    }
  }
  return balance;
};
