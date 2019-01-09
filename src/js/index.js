import '../scss/all.scss';
import $ from "jquery";

if ($('.single-card')) {
    $('.single-card .top-line').each(function () {
        $(this).css('width', $(this).attr('data-money-diagram') + '%');
    });
}