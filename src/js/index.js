import '../scss/all.scss';
import $ from "jquery";
import slick from "slick-carousel";

$(".img-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 1200,
    dots: false
});

$(".header-search").on("click", function () {
    $(".search-block").toggleClass("hide");
    // if ($(".search-block").hasClass("hide")) {
    //     $(".search-block").removeClass("hide").addClass("show");
    //     setTimeout(function () {
    //         $(".search-block form").removeClass("hide");
    //     }, 600);
    // } else {
    //     $(".search-block form").addClass("hide");
    //     setTimeout(function () {
    //         $(".search-block").removeClass("show").addClass("hide");
    //         $(".search-block.hide").css({'animation': 'search-hide .6s'});
    //     }, 300)
    // }

});

$(".search-block .btn-close").on("click", function () {
    $(".search-block").toggleClass("hide");
        // $(".search-block form").addClass("hide");
        // setTimeout(function () {
        //     $(".search-block").removeClass("show").addClass("hide");
        //     $(".search-block.hide").css({'animation': 'search-hide .6s'});
        // }, 300)
});

