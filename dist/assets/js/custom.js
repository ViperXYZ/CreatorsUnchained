$(document).ready(function() {

    //init DateTimePickers
    materialKit.initFormExtendedDatetimepickers();

    // Sliders Init
    // materialKit.initSliders();

    $('#show_transactions').click(function() {
        console.log("worked");
        $('#user_transactions').removeAttr('hidden');;
    });


    // if (typeof web3 !== 'undefined') {
    // web3 = new Web3(web3.currentProvider);
    //   } else {
    //   // set the provider you want from Web3.providers
    //   web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    // }

});
