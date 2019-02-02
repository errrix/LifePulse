import $ from "jquery";

export default (function faq() {
    // $('.faq-dropdown-block .faq-dropdown-question').on('click', function () {
    //     if($(this).parent().hasClass('show-more')) {
    //         $(this).parent().toggleClass('show-more');
    //         $(this).parent().find(".faq-dropdown-show-more").hide(200);
    //     } else {
    //         $(this).parent().toggleClass('show-more');
    //         $(this).parent().find(".faq-dropdown-show-more").show(200);
    //     }
    // });

    $('.faq-dropdown-block .faq-dropdown-question').on('click', function () {
        console.log($(this).next(".faq-dropdown-show-more"))
        if($(this).parent().hasClass('show-more')) {
            // $(this).next(".faq-dropdown-show-more").css('max-height', '0')
            $(this).parent().toggleClass('show-more');
        } else {
            // $(this).next(".faq-dropdown-show-more").css('max-height', '500px');
            $(this).parent().toggleClass('show-more');
        }
    });


})();