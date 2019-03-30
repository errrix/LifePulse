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

ReactDOM.render(
        <HashRouter>
            <div>
                <Route exact path="/" component={Homepage}/>
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


