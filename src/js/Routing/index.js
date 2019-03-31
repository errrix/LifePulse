import React from 'react';
import ReactDOM from 'react-dom';

import {Route, HashRouter, Switch } from 'react-router-dom';
import Homepage from './../pages/homepage'
import Faq from './../pages/faq'
import pageNotFound from './../pages/404'
import donate from './../pages/donate'
import SearchPage from './../pages/searchpage'
import Header from "./../components/header";
import Footer from "./../components/footer";
import Registration from "./../pages/registration";
import ScrollToTop from './../modules/scrollToTop'


class MainRouter extends React.Component {

    render() {
        return (
            <HashRouter>
                <ScrollToTop>
                    <Route path="/" component={Header}/>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/faq" component={Faq}/>
                        <Route exact path="/allcampaing" component={SearchPage}/>
                        <Route exact path="/registration" component={Registration}/>
                        <Route exact path="/donate" component={donate}/>
                        <Route component={pageNotFound}/>
                    </Switch>
                    <Route path="/" component={Footer}/>
                </ScrollToTop>
            </HashRouter>
        )
    }
};

export default MainRouter;