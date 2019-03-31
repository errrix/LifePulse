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
import {Route, HashRouter, Switch } from 'react-router-dom';
import Homepage from './pages/homepage'
import Faq from './pages/faq'
import pageNotFound from './pages/404'
import donate from './pages/donate'
import SearchPage from './pages/searchpage'
import Header from "./components/header";
import Footer from "./components/footer";
import Registration from "./pages/registration";
import ScrollToTop from './modules/scrollToTop'
import MainRouter from "./Routing";

ReactDOM.render(
        <MainRouter/>,
    document.getElementById('app')
);


