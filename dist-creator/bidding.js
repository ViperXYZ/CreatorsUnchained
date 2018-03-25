var web3;
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var descInput = document.getElementById("desc");
var tagsInput = document.getElementById("tags");
var profileInput = document.getElementById("profile");
var deadlineInput = document.getElementById("deadline")
var submitBtn = document.getElementById("submit");

submitBtn.onclick = function () {
    name = nameInput.value;
    email = emailInput.value;
    desc = descInput.value;
    tags = tagsInput.value;
    profile = profileInput.value;
    deadline = deadlineInput.value;

    web3.eth.getBlock(5, function(error, result){
        if(!error)
            console.log(JSON.stringify(result));
        else
            console.error(error);
    })
    console.log("Creating a bid for " + name);
    jsonInterface = {}
    contract = new web3.eth.Contract(jsonInterface)
};
