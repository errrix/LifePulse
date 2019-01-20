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

    //открыть жалобу и причину бана в попапе

    $('.admin-open-appeal').on('click', function () {
        $(this).parents('.button-block').find('.popup.m--admin-show-appeal').removeClass('hide-popup');
    });

    //попапы модерирования заявки

    $('.account-admin-campaign .button-block button').on('click', function () {
        $('.popup.m--view-campaign .popup-step').addClass('hide-step');
        if ($(this).hasClass('campaign-back')) {
            $('.popup.m--view-campaign .popup-step.m--campaign-back').removeClass('hide-step');
            $('.popup.m--view-campaign').removeClass('hide-popup');
        } else if($(this).hasClass('campaign-publish')) {
            $('.popup.m--view-campaign .popup-step.m--campaign-publish').removeClass('hide-step');
            $('.popup.m--view-campaign').removeClass('hide-popup');
        }else if($(this).hasClass('campaign-delete')) {
            $('.popup.m--view-campaign .popup-step.m--campaign-delete').removeClass('hide-step');
            $('.popup.m--view-campaign').removeClass('hide-popup');
        }else if($(this).hasClass('campaign-edit')) {
           $('.view-campaign .button-wrapper').removeClass('hide');
            $('.view-campaign textarea').removeAttr('disabled');
            $('.view-campaign select').removeAttr('disabled');
            $('.account-admin-campaign .button-block').addClass('hide');
        }
    });

})();