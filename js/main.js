//1
const bankAccount = {
 owenerName: 'human',
 acccountNumber:0,
 balance: 1000,
 deposit(amount) {
    this.balance += amount;

    return alert(`Ваш рахунок поповнено на ${amount} грн.`);
 },
 withdraw(amount) {
   if (amount <= this.balance) {
      this.balance -= amount;
      return alert(`З вашого рахунку знято ${amount} грн.`);
  }
  alert(`Недостатньо коштів на рахунку.:>> ${this.balance} грн.`);
},
showBalance() {
    alert(`На вашому рахунку:>> ${this.balance} грн.`);
},
};

bankAccount.showBalance();
bankAccount.withdraw(900);
bankAccount.showBalance();
bankAccount.deposit(700);
bankAccount.showBalance();

//2