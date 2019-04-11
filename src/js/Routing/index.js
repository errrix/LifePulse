import React, {Fragment} from 'react';

import {Route, HashRouter, Switch} from 'react-router-dom';
import Homepage from './../pages/homepage'
import Faq from './../pages/faq'
import pageNotFound from './../pages/404'
import donate from './../pages/donate'
import SearchPage from './../pages/searchpage'
import Header from "./../components/header";
import Footer from "./../components/footer";
import confidentiality from "./../pages/confidentiality";
import createFundraiser from "./../pages/create-fundraiser";
import Rules from "./../pages/rules";
import about from "./../pages/about";
import usercard from "./../pages/usercard";
import Registration from "./../pages/registration";
import UserAccount from "./../pages/user-account";
import RegistrationConfirm from "./../pages/registration-confirm";
import ScrollToTop from './../modules/scrollToTop';
import AdminRouting from './admin-routing/index'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './../reducer/';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class MainRouter extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <ScrollToTop>
                        <Switch>
                            <Route path="/admin" component={AdminRouting}/>
                            <Fragment>
                                <Route path="/" component={Header}/>
                                <Switch>
                                    <Route exact path="/" component={Homepage}/>
                                    <Route exact path="/faq" component={Faq}/>
                                    <Route exact path="/allcampaing" component={SearchPage}/>
                                    <Route exact path="/registration" component={Registration}/>
                                    <Route exact path="/confidentiality" component={confidentiality}/>
                                    <Route exact path="/rules" component={Rules}/>
                                    <Route exact path="/about" component={about}/>
                                    <Route exact path="/donate" component={donate}/>
                                    <Route exact path="/account" component={UserAccount}/>
                                    <Route exact path="/usercard" component={usercard}/>
                                    <Route exact path="/create-fundraiser" component={createFundraiser}/>
                                    <Route exact path="/registration-confirm" component={RegistrationConfirm}/>
                                    <Route component={pageNotFound}/>
                                </Switch>
                                <Route path="/" component={Footer}/>
                            </Fragment>

                        </Switch>

                    </ScrollToTop>
                </HashRouter>
            </Provider>
        )
    }
};


export default MainRouter;