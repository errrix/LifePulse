import React from 'react';
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

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './../reducer/';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import {addToken} from "./../actions";
import {connect} from "react-redux";
import registrationConfirm from "../pages/registration-confirm";


class MainRouter extends React.Component {

    // constructor(props) {
    //     super(props)
    // }

    render() {

        return (
            <Provider store={store}>

                <HashRouter>
                    <ScrollToTop>
                        <Route path="/" component={Header}/>
                        <Switch>
                            <Route exact path="/" component={Homepage}/>
                            <Route exact path="/" component={Homepage}/>
                            <Route exact path="/faq" component={Faq}/>
                            <Route exact path="/allcampaing" component={SearchPage}/>
                            <Route exact path="/registration" component={Registration}/>
                            <Route exact path="/confidentiality" component={confidentiality}/>
                            <Route exact path="/rules" component={Rules}/>
                            <Route exact path="/donate" component={donate}/>
                            <Route exact path="/account" component={UserAccount}/>
                            <Route exact path="/usercard" component={usercard}/>
                            <Route exact path="/appeal" component={appeal}/>
                            <Route exact path="/application" component={application}/>
                            <Route exact path="/ban" component={ban}/>
                            <Route exact path="/categories" component={categories}/>
                            <Route exact path="/staff" component={staff}/>
                            <Route exact path="/users" component={users}/>
                            <Route exact path="/view-campaign" component={viewCampaign}/>
                            <Route exact path="/registration-confirm" component={registrationConfirm}/>
                            <Route component={pageNotFound}/>
                        </Switch>
                        <Route path="/" component={Footer}/>
                    </ScrollToTop>
                </HashRouter>
            </Provider>
        )
    }
};



export default MainRouter;