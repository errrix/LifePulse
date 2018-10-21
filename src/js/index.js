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

// Change header-bg
$(function() {
    setTimeout(function() {
        $('header').css({'background-image':'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(../../../dist/img/header-baner2.jpg)'});
    }, 3000);
    setTimeout(function() {
        $('header').css({'background-image':'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(../../../dist/img/header-baner3.jpg)'});
    }, 6000);
    setTimeout(function() {
        $('header').css({'background-image':'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(../../../dist/img/header-baner4.jpg)'});
    }, 9000);
    setTimeout(function() {
        $('header').css({'background-image':'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(../../../dist/img/header-baner5.jpg)'});
    }, 12000);
    setTimeout(function() {
        $('header').css({'background-image':'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(../../../dist/img/header-baner6.jpg)'});
    }, 15000);
    setTimeout(function() {
        $('header').css({'background-image':'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(../../../dist/img/header-baner7.jpg)'});
    }, 18000);
    setTimeout(function() {
        $('header').css({'background-image':'linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%), url(../../../dist/img/header-baner8.jpg)'});
    }, 21000);
});
