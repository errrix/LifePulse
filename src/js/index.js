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
import {Route, HashRouter} from 'react-router-dom';
import Homepage from './pages/homepage'
import Faq from './pages/faq'
import pageNotFound from './pages/404'
import SearchPage from './pages/searchpage'
import Header from "./components/header";
import Footer from "./components/footer";

ReactDOM.render(
        <HashRouter>
            <div>
                <Route path="/" component={Header}/>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/faq" component={Faq}/>
                <Route exact path="/allcampaing" component={SearchPage}/>
                <Route exact path="/404" component={pageNotFound}/>
                <Route path="/" component={Footer}/>
                {/*<Route exact path="/faq" component={Faq}/>*/}
                {/*<Route path="/" component={Header}/>*/}
                {/*<Route exact path="/" component={WebPage}/>*/}
                {/*<Route exact path="/film:id"*/}
                       {/*render={({match}) => {*/}
                           {/*const id = match.params.id;*/}
                           {/*return <DetailMovie itemId={id}/>*/}
                       {/*}}/>*/}
                {/*<Route path="/incinema" component={InCinema}/>*/}
            </div>
        </HashRouter>,
    document.getElementById('app')
);


