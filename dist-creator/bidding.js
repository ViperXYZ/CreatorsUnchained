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
        updateContracts();
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
    name = nameInput.value;
    email = emailInput.value;
    desc = descInput.value;
    tags = tagsInput.value;
    profile = profileInput.value;
    deadline = deadlineInput.value;

    console.log("Creating a bid for " + name);
    var jsonInterface = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"auctions","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bidding_end","type":"uint256"},{"name":"beneficiary","type":"address"},{"name":"name","type":"string"},{"name":"description","type":"string"},{"name":"email","type":"string"},{"name":"tags","type":"string"},{"name":"profile","type":"string"}],"name":"new_auction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"id","type":"uint256"}],"name":"NewAuction","type":"event"}];
    var contract = web3.eth.contract(jsonInterface);
    instance = contract.at("0x8e23974b151827f0E8151aC526C4c4c974c06A90");
    instance.new_auction(Date.parse(deadline) / 1000, eth.defaultAccount, name, desc, email, tags, profile,
    function(err,result){
        if(err) {
            console.error(err);
        }
        else {
            console.log("Success!");
            updateContracts();
        }});
};

function updateContracts() {
    var tx_table = $('#user_transactions tbody');
    tx_table.empty();
    auctions =[];
    for (i = 0;(contractId = instance.auctions(i)) != "0x"; i++) {
        var auctionContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ended","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"get_bid_value","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"email","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bid_id","type":"uint256"}],"name":"select","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"get_bid_name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"get_bid_email","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_email","type":"string"}],"name":"bid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"profile","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bidding_end","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"num_bids","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"uint256"}],"name":"get_bid_owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tags","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pending_returns","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_bidding_end","type":"uint256"},{"name":"_beneficiary","type":"address"},{"name":"_name","type":"string"},{"name":"_description","type":"string"},{"name":"_email","type":"string"},{"name":"_tags","type":"string"},{"name":"_profile","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bid_id","type":"uint256"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"winner_id","type":"uint256"}],"name":"AuctionEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"WithdrawAvailable","type":"event"}]);
        var auctionInstance = auctionContract.at(contractId);
        auctions.push(auctionInstance);
    }
    auctions = auctions.reverse();
    for (ai in auctions) {
        auctionInstance = auctions[ai];
        x=[i-ai,auctionInstance.name(),auctionInstance.email(),auctionInstance.description(),
            auctionInstance.tags(), auctionInstance.profile() ,auctionInstance.bidding_end(),["Incomplete","Complete"][+auctionInstance.ended()]];
        row = "<tr>";
        for (a in x) {
            row += "<td>"+x[a]+"</td>";
        }
        row += "</tr>";
        tx_table.append(row);
    }
}
