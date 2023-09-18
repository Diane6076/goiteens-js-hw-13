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

const nameInp = document.querySelector(".nameInp ")
const emailInp  = document.querySelector(".emailInp ")
const passwordInp  = document.querySelector(".passwordInp ")

const user = {
  name: 'Di',
  email: 'di145@gmail.com',
  password: '002255',

login: function () {
  passwordInp.addEventListener("click", () => {
      if (this.email === emailInp.value && this.password === passwordInp.value) {
           console.log("Ви ввійшли в акаунт");
      } else if (this.email != emailInp.value && this.password != passwordInp.value) {
          console.log("Помилка у пошті та паролі");
       } else if (this.email != emailInp.value) {
          console.log("Помилка у пошті");
       } else if (this.password != passwordInp.value) {
            console.log("Помилка у паролі");
      }
  });        
}
};
user.login();

//4

const h = document.querySelector(".h")
const whichDirector = document.querySelector(".whichDirector")
const whicYear = document.querySelector(".whicYear")
const allRating = document.querySelector(".allRating")
const movie = {
    title: "Fhnfn Wqgj", 
    director: "Lover Xergh", 
    year: 2010, 
    rating: 7.5,
    madeAnotherColorText() {
        h.textContent = this.title;
        whichDirector.textContent = this.director;
        whicYear.textContent = this.year;
        allRating.textContent = this.rating;
        if (this.rating > 8) {
            return h.style.color = "green";
        }
    }
}
movie.madeAnotherColorText()