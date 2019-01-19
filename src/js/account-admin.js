import $ from "jquery";

export default (function accountAdmin() {
    $('.account-admin-new-staff').on('click', function () {
        $('.popup.m--admin-add-new-staff').removeClass('hide-popup');
    });

    $('.admin-edit-staff').on('click', function () {
        $(this).parents('.button-block').find('.popup.m--admin-edit-staff').removeClass('hide-popup');
    });
})();