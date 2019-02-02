import $ from "jquery";

export default (function faq() {
    $('.faq-dropdown-block .faq-dropdown-question').on('click', function () {
        console.log($(this).next(".faq-dropdown-show-more"))
        if($(this).parent().hasClass('show-more')) {
            $(this).parent().toggleClass('show-more');
        } else {
            $(this).parent().toggleClass('show-more');
        }
    });
})();