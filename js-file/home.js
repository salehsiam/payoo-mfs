document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const sendMoney = document.getElementById("get-send-money").value;
    const sendMoneyAmount = parseFloat(sendMoney);
    const pinNumber = document.getElementById("get-pin").value;
    if (pinNumber === "1234") {
      const balance = document.getElementById("balance").innerText;
      const balanceAmount = parseFloat(balance);
      document.getElementById("balance").innerText =
        balanceAmount + sendMoneyAmount;
    } else {
      alert("something went wrong");
    }
  });

document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = document.getElementById("cash-out-money").value;
    const cashOutAmount = parseFloat(cashOut);
    const pinNumber = document.getElementById("get-pin2").value;
    if (pinNumber === "1234") {
      const balance = document.getElementById("balance").innerText;
      const balanceAmount = parseFloat(balance);
      document.getElementById("balance").innerText =
        balanceAmount - cashOutAmount;
    } else {
      alert("something went wrong");
    }
  });
