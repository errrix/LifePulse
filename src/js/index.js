import '../scss/all.scss';
// import $ from "jquery";
// import popup from './popup'
// import userAccount from './user-account'
// import newCampaign from './new-campaign'
// import accountAdmin from './account-admin'
// import faq from './faq'
// import donate from './donate-page'
// import newCampaignTab from './new-campaign-tab'

import React from 'react';
import ReactDOM from 'react-dom';

// import { createStore } from 'redux';
// import reducer from './reducer/';

import MainRouter from "./Routing";

ReactDOM.render(
        <MainRouter/>,
    document.getElementById('app')
);


