document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // add money

    const addMoney = getInputFieldById("get-send-money");
    const pinNumber = getInputFieldById("get-pin");
    console.log(addMoney, pinNumber);
  });
