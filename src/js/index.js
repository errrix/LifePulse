import '../scss/all.scss';
import $ from "jquery";

if ($('.money-count')) {
    $('.single-card .top-line, .shortInfoBlock .top-line').each(function () {
        $(this).css('width', $(this).attr('data-money-diagram') + '%');
    });
}
// TODO Немного подправил JS, так как в карточке тоже используем эту же полосу сбора средств и протестировал ТУДУ