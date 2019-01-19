import $ from "jquery";

export default (function popup() {

    //открываем попап логина
    $('.header-login-popup').on('click', function () {
        $('.popup').removeClass('hide-popup');
    });

    //закрываем попап логина
    //TODO переписать на jquery(правильно закрывать попапы если их больше одного на странице)
    let popups = document.querySelectorAll('.popup');
    for (let i = 0; i < popups.length; i++) {
        popups[i].addEventListener('click', function (e) {
            if(!this.querySelector('.popup-content-block').contains(e.target)) {
                this.classList.add('hide-popup');
            }
        });
    }

    // $('.popup').on('click', function (e) {
    //     console.log($.contains(document.querySelector('.popup'), e.target));
    //    if(!$.contains(document.querySelector('.popup'), e.target)) {
    //        $(this).addClass('hide-popup');
    //    }
    // });

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