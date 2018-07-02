$(document).ready(function () {
    materialKit.initFormExtendedDatetimepickers();
    $('#user_transactions').hide();

    $('#show_transactions').click(function () {
        if ($('#user_transactions').is(":visible")) {
            $('#user_transactions').hide();

        } else {
            $('#user_transactions').show();

        }

    });
});
