var Bank = require('./bank/bank.js');
var BankView = require('./bank/view/bank_view.js');
var sampleAccounts = require('../sample.json');
var Account = require('./bank/account.js');

window.onload = function() {
  var bank = new Bank();
  for (var accountData of sampleAccounts) {
    bank.addAccount(new Account(accountData))
  };
  var bankView = new BankView(bank);


};
