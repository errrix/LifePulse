import $ from "jquery";

export default (function faq() {

    $('.faq-dropdown-block .faq-dropdown-item').on('click', function () {
        if($(this).find('.faq-dropdown-show-more').hasClass('faq-dropdown-hide')) {
            $(this).find('.faq-dropdown-show-more').toggleClass('faq-dropdown-hide');
            $(this).find('.faq-dropdown-question').addClass('active');
        } else {
            $(this).find('.faq-dropdown-show-more').addClass('faq-dropdown-hide');
            $(this).find('.faq-dropdown-question').removeClass('active');
        }
    });
})();