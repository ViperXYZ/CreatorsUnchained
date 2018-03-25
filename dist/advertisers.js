$(document).ready(function() {

    //init DateTimePickers
    materialKit.initFormExtendedDatetimepickers();
    var table = $('#creators_bids').DataTable();

    $('#creators_bids tbody').on('click', 'tr', function () {
        // set up a click listener for each row in a table of bids
        var data = table.row( this ).data();
        var bidAmount = prompt("Please enter your bid amount", "1 eth");
        // if this bidAmount is selected, send a transaction for that contract
        if (bidAmount == null || bidAmount == "") {
            // bid cancelled
        } else {
            var creatorAddress = data[1]; // TODO: this is name, not address
            makeBid(creatorAddress, bidAmount);
        }

    } );
});


if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}
var eth = web3.eth
var auctionContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ended","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"beneficiary","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"bids","outputs":[{"name":"id","type":"uint256"},{"name":"value","type":"uint256"},{"name":"owner","type":"address"},{"name":"name","type":"string"},{"name":"email","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"email","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bid_id","type":"uint256"}],"name":"select","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_email","type":"string"}],"name":"bid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"profile","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bidding_end","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tags","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pending_returns","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_bidding_end","type":"uint256"},{"name":"_beneficiary","type":"address"},{"name":"_name","type":"string"},{"name":"_description","type":"string"},{"name":"_email","type":"string"},{"name":"_tags","type":"string"},{"name":"_profile","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bid_id","type":"uint256"}],"name":"NewBid","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"winner_id","type":"uint256"}],"name":"AuctionEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"owner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"WithdrawAvailable","type":"event"}]);
console.log("Block number is " + eth.blockNumber);


function makeBid(creatorAddress, bidAmount) {

}
