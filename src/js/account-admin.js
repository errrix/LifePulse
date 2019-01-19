import $ from "jquery";

export default (function accountAdmin() {

    //Добавление и редактирование членов комманды
    $('.account-admin-new-staff').on('click', function () {
        $('.popup.m--admin-add-new-staff').removeClass('hide-popup');
    });

    $('.admin-edit-staff').on('click', function () {
        $(this).parents('.button-block').find('.popup.m--admin-edit-staff').removeClass('hide-popup');
    });

    //Добавление и редактирование категорий заболеваний
    $('.account-admin-new-category').on('click', function () {
        $('.popup.m--admin-add-new-category').removeClass('hide-popup');
    });

    $('.admin-edit-category').on('click', function () {
        $(this).parents('.button-block').find('.popup.m--admin-edit-category').removeClass('hide-popup');
    });
})();