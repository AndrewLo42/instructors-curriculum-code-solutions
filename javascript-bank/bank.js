/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (typeof (balance) !== 'number' || balance <= 0 || isNaN(balance)) {
    return null;
  }
  var number = this.nextAccountNumber;
  var account = new Account(number, holder);
  account.deposit(balance);
  this.accounts.push(account);
  this.nextAccountNumber++;
  return account.number;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    var account = this.accounts[i];
    if (account.number === number) {
      return account;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalAssets = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    var account = this.accounts[i];
    totalAssets += account.getBalance();
  }
  return totalAssets;
};
