import $ from "jquery";

export default (function userAccount() {

    $('.user-account-main-block .button-block button').on('click', function () {
        if(!$(this).hasClass('active')) {
            $('.user-account-main-block .button-block button').toggleClass('active');
            $('.user-account-main-block-container div').toggleClass('active');

            if($(this).hasClass('my-campaign')) {
                $('.user-account-main-block .button-block a').addClass('active');
            } else {
                $('.user-account-main-block .button-block a').removeClass('active');
            }
        }
    });
})();