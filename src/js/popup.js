import $ from "jquery";

export default (function popup() {

    //открываем попап логина
    $('.header-login-popup').on('click', function () {
        $('.popup').removeClass('hide-popup');
    });

    //закрываем попап логина
    $('.popup').on('click', function (e) {
       if(!$.contains(document.querySelector('.popup'), e.target)) {
           $(this).addClass('hide-popup');
       }
    });

    //открываем окно восстановить пароль
    $('.popup .forgot-password').on('click', function () {
        $('.popup-step.m--login').addClass('hide-step');
        $('.popup-step.m--restore-password').removeClass('hide-step');
    });

    //возвращаемся с формы восстановить пароль на форму логина
    $('.popup-step.m--restore-password .button-back').on('click', function () {
        $('.popup-step.m--restore-password').addClass('hide-step');
        $('.popup-step.m--login').removeClass('hide-step');
    });

})();