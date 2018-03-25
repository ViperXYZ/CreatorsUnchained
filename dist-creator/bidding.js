var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var descInput = document.getElementById("desc");
var tagsInput = document.getElementById("tags");
var profileInput = document.getElementById("profile");
var deadlineInput = document.getElementById("deadline")
var submitBtn = document.getElementById("submit");

$(document).ready(function() {

        //init DateTimePickers
        materialKit.initFormExtendedDatetimepickers();
});

submitBtn.onclick = function () {
    console.log("s " + Web3);
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    var eth = web3.eth
    console.log("Provider: " + web3.provider);
    console.log(eth);
    console.log(eth.getBlockNumber);
    name = nameInput.value;
    email = emailInput.value;
    desc = descInput.value;
    tags = tagsInput.value;
    profile = profileInput.value;
    deadline = deadlineInput.value;

    eth.getBlockNumber(function(error, res) {
        if(!error) {
            console.log(res);
        }
        else {
            console.error(error);
        }
    });

    eth.blockNumber;

    console.log("Creating a bid for " + name);
    jsonInterface = {}
    // contract = new web3.eth.Contract(jsonInterface)
};
