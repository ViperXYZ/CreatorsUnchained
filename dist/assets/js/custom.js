$(document).ready(function() {

    //init DateTimePickers
    materialKit.initFormExtendedDatetimepickers();

    $('#show_transactions').click(function() {
        console.log("worked");
        $('#user_transactions').removeAttr('hidden');;
    });

});
