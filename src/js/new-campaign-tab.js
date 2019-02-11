import $ from "jquery";

export default (function newCampaignTab() {

    const radioToWhom = $('input[name="to-whom"]');

        if(radioToWhom.val() === 'self') {
            $('#another-recipient').hide();
            $('#another-recipient-foto').hide();
        } else if(radioToWhom.val() === 'notself') {
            $('#another-recipient').show();
            $('#another-recipient-foto').show();
        }

    radioToWhom.on('change', function () {
        if($(this).val() === 'self') {
            $('#another-recipient').hide();
            $('#another-recipient-foto').hide();
        } else if($(this).val() === 'notself') {
            $('#another-recipient').show();
            $('#another-recipient-foto').show();
        }
    });

    $('.create-progress-2').on('click', function () {
        $(".step1").fadeOut(900);
        setTimeout(function() {
            $(".step2").fadeIn(700);
        }, 900);
    });

})();