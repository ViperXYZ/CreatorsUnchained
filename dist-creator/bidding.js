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
        console.log("branch 1");
        web3 = new Web3(web3.currentProvider);
    } else {
        console.log("branch 2");
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
    var jsonInterface = [{"constant":false,"inputs":[{"name":"bidding_end","type":"uint256"},{"name":"beneficiary","type":"address"},{"name":"name","type":"string"},{"name":"description","type":"string"},{"name":"email","type":"string"}],"name":"new_auction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"auctions","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"}],"name":"NewAuction","type":"event"}];
    var contract = web3.eth.contract(jsonInterface);
    var instance = contract.at("0x492934308E98b590A626666B703A6dDf2120e85e");
    console.log(deadline);
    instance.new_auction(Date.parse(deadline) / 1000, eth.defaultAccount, name, desc, email, function(err,result){console.log([err,result])});
};

function updateContracts() {
    
}
