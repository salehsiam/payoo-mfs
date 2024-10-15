document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const getPhone = document.getElementById("getPhone").value;
    const getPin = document.getElementById("getPass").value;
    if (getPhone === "01630122850" && getPin === "1234") {
      window.location.href = "./home.html";
    } else {
      alert("wrong number or pin");
    }
  });
