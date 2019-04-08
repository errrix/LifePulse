import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

import {Route, HashRouter, Switch} from 'react-router-dom';
import Homepage from './../pages/homepage'
import Faq from './../pages/faq'
import pageNotFound from './../pages/404'
import donate from './../pages/donate'
import SearchPage from './../pages/searchpage'
import Header from "./../components/header";
import Footer from "./../components/footer";
import confidentiality from "./../pages/confidentiality";
import Rules from "./../pages/rules";
import usercard from "./../pages/usercard";
import Registration from "./../pages/registration";
import UserAccount from "./../pages/user-account";
import RegistrationConfirm from "./../pages/registration-confirm";
import ScrollToTop from './../modules/scrollToTop';
import application from "./../pages/admin/application";
import appeal from "./../pages/admin/appeal";
import ban from "./../pages/admin/ban";
import categories from "./../pages/admin/categories";
import staff from "./../pages/admin/staff";
import users from "./../pages/admin/users";
import viewCampaign from "./../pages/admin/view-campaign";
import adminLogin from "../pages/admin/admin-login";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './../reducer/';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import {addToken} from "./../actions";
import {connect} from "react-redux";
import registrationConfirm from "../pages/registration-confirm";


class Admin extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/admin" component={adminLogin}/>
                <Route exact path="/admin/appeal" component={appeal}/>
                <Route exact path="/admin/application" component={application}/>
                <Route exact path="/admin/ban" component={ban}/>
                <Route exact path="/admin/categories" component={categories}/>
                <Route exact path="/admin/staff" component={staff}/>
                <Route exact path="/admin/users" component={users}/>
                <Route exact path="/admin/view-campaign" component={viewCampaign}/>
            </Switch>
        )
    }
}

class MainRouter extends React.Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {

        return (
            <Provider store={store}>

                <HashRouter>
                    <ScrollToTop>
                        <Switch>
                            <Route path="/admin" component={Admin}/>
                            <Fragment>
                                <Route path="/" component={Header}/>
                                <Switch>
                                    <Route exact path="/" component={Homepage}/>
                                    <Route exact path="/faq" component={Faq}/>
                                    <Route exact path="/allcampaing" component={SearchPage}/>
                                    <Route exact path="/registration" component={Registration}/>
                                    <Route exact path="/confidentiality" component={confidentiality}/>
                                    <Route exact path="/rules" component={Rules}/>
                                    <Route exact path="/donate" component={donate}/>
                                    <Route exact path="/account" component={UserAccount}/>
                                    <Route exact path="/usercard" component={usercard}/>
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