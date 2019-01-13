import '../scss/all.scss';
import $ from "jquery";
import popup from './popup'

popup();

if ($('.money-count')) {
    $('.single-card .top-line, .shortInfoBlock .top-line').each(function () {
        $(this).css('width', $(this).attr('data-money-diagram') + '%');
    });
}