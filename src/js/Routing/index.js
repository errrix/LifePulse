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
import ScrollToTop from './../modules/scrollToTop';
import application from "./../pages/admin/application";

import appeal from "./../pages/admin/appeal";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './../reducer/';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import {addToken} from "./../actions";
import {connect} from "react-redux";


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