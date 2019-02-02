import $ from "jquery";

export default (function donate() {
    $('.donate-page-form .fast-choice span').on('click', function () {
        var choiceDonate = $(this).text();
        var input = $(".label-input input[type=number]");
        $('.fast-choice span').removeClass('active');
        $(this).addClass('active');
        input.val(choiceDonate);
    });
    $('.donate-page-form .label-input input[type=number]').change(function(){
        $('.fast-choice span').removeClass('active');
    });
})();