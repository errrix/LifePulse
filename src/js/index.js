import '../scss/all.scss';
import $ from "jquery";

$(".header-search").on("click", function () {

    if ($(".search-block").hasClass("hide")) {
        $(".search-block").removeClass("hide").addClass("show");
        setTimeout(function () {
            $(".search-block form").removeClass("hide");
        }, 600);
    } else {
        $(".search-block form").addClass("hide");
        setTimeout(function () {
            $(".search-block").removeClass("show").addClass("hide");
            $(".search-block.hide").css({'animation': 'search-hide .6s'});
        }, 300)
    }

});

$(".search-block .btn-close").on("click", function () {
        $(".search-block form").addClass("hide");
        setTimeout(function () {
            $(".search-block").removeClass("show").addClass("hide");
            $(".search-block.hide").css({'animation': 'search-hide .6s'});
        }, 300)
});