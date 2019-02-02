import $ from "jquery";

export default (function faq() {
    $('.faq-dropdown-block .faq-dropdown-question').on('click', function () {
        if($(this).parent().hasClass('show-more')) {
            $(this).parent().toggleClass('show-more');
        } else {
            $(this).parent().toggleClass('show-more');
        }
    });
})();