const day = [{ deposit: 0, withdraw: 0 }];
const balance = 1000;
let report = null;

function addDay() {
  const newDay = { deposit: 0, withdraw: 0 };
  day.push(newDay);
  addForms();
}

function removeDay(idx) {
  day.splice(idx, 1);
  addForms();
  console.log(day);
}

function a(x, type, index) {
  if (type == "deposit") {
    day[index].deposit = x;
  }

  if (type === "withdraw") {
    day[index].withdraw = x;
  }
}

const container = document.getElementById("tambah");

function addForms() {
  container.innerHTML = day
    .map((item, index) => {
      const newDay = index === day.length - 1;
      const addNewDay = day.length > 1;

      let plusButton = "";
      let minusButton = "";

      if (newDay) {
        plusButton = `
        <button type="button" class="add" onclick="addDay(${item.deposit})">
          <i data-feather="plus-circle" class="icon-plus"></i>
        </button>
      `;
      }

      if (addNewDay) {
        minusButton = `
        <button type="button" class="remove" onclick="removeDay(${index})">
          <i data-feather="minus-circle" class="icon-minus"></i>
        </button>
      `;
      }

      return `
  <div>
    <form class="form">
      <p class="text" id="day">Day ${index + 1}</p>
      <div class="deposit">
        <label class="text">Deposit :</label>
        <input type="text" value="${
          item.deposit
        }" placeholder="$" onchange="a(this.value, 'deposit', ${index} )" class="input">
      </div>
      <div class="withdraw">
        <label class="text">Withdraw :</label>
        <input type="text" value="${
          item.withdraw
        }" placeholder="$" class="input" onchange="a(this.value, 'withdraw', ${index})">
      </div>
      <div class ="btn-add">
      ${plusButton} 
      ${minusButton} 
      </div>
    </form>
  </div>
`;
    })
    .join("");

  feather.replace();
}

addForms();

function addReport() {
  report = day;
  console.log(report);
  showReport();
}

const container2 = document.getElementById("report-data");

function showReport() {
  let currentBalance = null;
  let tempBalance = null;
  let newBalance = null;
  let eodBalance = null;
  let interest = null;
  let finalBalance = null;

  container2.innerHTML = report = day
    .map((item, index) => {
      if (index > 0) {
        currentBalance = tempBalance + parseInt(item.deposit);
        newBalance = currentBalance - parseInt(item.withdraw);
        interest = (newBalance * 15) / 100;
        eodBalance = interest + newBalance;
        tempBalance = eodBalance;

        if (newBalance < item.withdraw) {
          insufficient = `<p>Insufficient funds. Withdrawal failed.</p>`;
          newBalance = currentBalance;
          interest = (newBalance * 15) / 100;
          eodBalance = interest + newBalance;
          tempBalance = eodBalance;
        } else {
          insufficient = ``;
        }
      } else {
        currentBalance = parseInt(item.deposit) + balance;
        newBalance = currentBalance - parseInt(item.withdraw);
        interest = (newBalance * 15) / 100;
        eodBalance = interest + newBalance;
        tempBalance = eodBalance;

        if (newBalance < item.withdraw) {
          insufficient = `<p>Insufficient funds. Withdrawal failed.</p>`;
          newBalance = currentBalance;
          interest = (newBalance * 15) / 100;
          eodBalance = interest + newBalance;
          tempBalance = eodBalance;
        } else {
          insufficient = ``;
        }
      }

      if (index === 0) {
        initial = `<td>Initial</td>
         <td>: $${balance}</td>`;
      } else {
        initial = ``;
      }

      if (index == day.length - 1) {
        finalBalance = `
        <tr>
        <td>=============</td>
        </tr>
        <tr>
        <td>Final Balance : $${tempBalance}</td>
        </tr>
        `;
      } else {
        finalBalance = ``;
      }

      return `
        <table class="report">
          <tr class="head-table">
            <th>Day ${index + 1}</th>
          </tr>
          <tr>
            ${initial}
          </tr>
          <tr>
            <td>Deposit</td>
            <td>: $${item.deposit}</td>
          </tr>
          <tr>
            <td>New Balance</td>
            <td>: $${currentBalance}</td>
          </tr>
          <tr>
            <td>Withdraw</td>
            <td>: $${item.withdraw}</td>
          </tr>
            <td>${insufficient}</td>
          <tr>
            <td>New Balance</td>
            <td>: $${newBalance}</td>
          </tr>
          <tr>
            <td>Daily Interest Added</td>
            <td>: $${interest}</td>
          </tr>
          <tr>
            <td>End of Day ${index + 1} Balance</td>
            <td>: $${eodBalance}</td>
          </tr>
          ${finalBalance}
        </table>
      `;
    })
    .join("");
}

const initialBalance = document.getElementById("balance");

initialBalance.innerText = balance;
