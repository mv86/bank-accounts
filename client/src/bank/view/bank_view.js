var BankView = function(bank) {
 
  var totalDisplay = document.getElementById('total');
  var businessTotalDisplay = document.getElementById('business-total');
  var personalTotalDisplay = document.getElementById('personal-total');
  var interestButton = document.createElement('button');
  interestButton.innerText = "Add Interest";
  document.body.appendChild(interestButton);

  interestButton.onclick = function() {
    console.log(bank);
    bank.chargeInterest()
    // console.log('hello')
  };

  totalDisplay.innerText = "Total: £" + bank.totalCash();
  businessTotalDisplay.innerText = "Total Business: £" + bank.totalCash('business');
  personalTotalDisplay.innerText = "Total Personal: £" + bank.totalCash('personal');

  var businessAccountList = document.getElementById('business-accounts');
  var personalAccountList = document.getElementById('personal-accounts');

  this.populateAccountList(businessAccountList, 
    bank.filteredAccounts('business'));
  this.populateAccountList(personalAccountList, 
    bank.filteredAccounts('personal'));
};

BankView.prototype = {
  createItemForAccount: function(account) {
    var accountListItem = document.createElement('li');
    accountListItem.innerText = account.owner + ": £" + account.amount;
    return accountListItem;
  },

  populateAccountList: function(listElement, accounts) {
    for (account of accounts) {
      listElement.appendChild(this.createItemForAccount(account));
    };
  },
  
};

module.exports = BankView;