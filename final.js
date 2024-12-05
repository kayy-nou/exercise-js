let balance = 1000;
let newBalance = 0;
let finalBalance = [];
console.log("Initial Balance : $" + balance);
function deposit(d) {
  console.log("Deposit : $" + d);
  balance = balance + d;
  newBalance = balance;
}
deposit(500);
console.log("New Balance : $" + newBalance);
function withdrawal(w) {
  console.log("Attempt to Withdraw : $" + w);
  if (w <= newBalance) {
    newBalance = newBalance - w;
    balance = newBalance;
    console.log("New Balance : $" + balance);
  } else if (w > newBalance) {
    console.log("Invalid withdraw due to insufficent funds ");
    console.log("Balance : $" + balance);
  }
}
withdrawal(1200);
deposit(200);
console.log("New Balance : $" + newBalance);
console.log("---------------------");
console.log("Final Balance : $" + newBalance);
