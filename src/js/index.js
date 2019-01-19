import '../scss/all.scss';
import $ from "jquery";
import popup from './popup'
import userAccount from './user-account'
import newCampaign from './new-campaign'
import accountAdmin from './account-admin'


if ($('.money-count')) {
    $('.single-card .top-line, .shortInfoBlock .top-line').each(function () {
        $(this).css('width', $(this).attr('data-money-diagram') + '%');
    });
}