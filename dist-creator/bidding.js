var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var descInput = document.getElementById("desc");
var tagsInput = document.getElementById("tags");
var profileInput = document.getElementById("profile");
var deadlineInput = document.getElementById("deadline")
var submitBtn = document.getElementById("submit");

submitBtn.onclick = function () {
    console.log("Hello World");
};
