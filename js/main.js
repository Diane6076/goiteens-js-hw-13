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

const weather = {
temperature: null,
humidity: null,
windSpeed: null,
  
checkTemperature: function() {
const temperatureInput = document.getElementById("temperatureInput").value;
    this.temperature = parseFloat(temperatureInput);
  
  if (this.temperature < 0) {
    console.log("Температура нижче 0 градусів Цельсія");
    return true;
   } else {
    console.log("Температура вище або рівна 0 градусів Цельсія");
    return false;
  }
}
};
  
function checkTemperature() {
    weather.checkTemperature();
}


//3


//4

