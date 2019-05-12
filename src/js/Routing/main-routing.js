import React, {Fragment} from 'react';
import about from "../pages/about";
import usercard from "../pages/usercard/usercard";
import AdminRouting from "./admin-routing";
import Header from "../components/header";
import Subscribeblock from "../components/subscribeBlock";
import Registration from "../pages/registration/registration";
import donate from "../pages/donate";
import Faq from "../pages/faq";
import Rules from "../pages/rules";
import RegistrationConfirm from "../pages/registration-confirm";
import pageNotFound from "../pages/404";
import ThxCreate from "../pages/thx-create";
import UserAccount from "../pages/user-account/user-account";
import SearchPage from "../pages/searchpage";
import Footer from "../components/footer";
import Homepage from "../pages/homepage/homepage";
import CreateFundraiser from "../pages/create-fundraiser/create-fundraiser";
import confidentiality from "../pages/confidentiality";
import successStories from "../pages/success-stories";
import LoginPopup from '../components/popup/loginPopup'

import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router";
import {addUserId, addUserRole} from "./../actions";
import {addUserInfo, changePopup} from "../actions";
import {BrowserRouter} from 'react-router-dom';
import ScrollToTop from './../modules/scrollToTop';
import CSSTransitionGroup from "react-addons-css-transition-group"

import url from "../modules/url"
import ThxDonate from "../pages/thx-donate";

class MainRouting extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};


    }

    IsUser() {
        return this.props.roles.indexOf('user') !== -1
    }

    componentDidMount() {
        fetch(`${url}/api/users/auth`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            credentials: "include"
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                if (data.success) {
                    console.log(data);
                    this.props.addUserId(data.response.id);
                    this.props.addUserRole(data.response.roles);
                } else {
                    console.log(data);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <Route path="/admin" component={AdminRouting}/>
                        <Fragment>
                            <CSSTransitionGroup transitionName="logn-popup"
                                                transitionEnter={true}
                                                transitionEnterTimeout={300}
                                                transitionLeave={true}
                                                transitionLeaveTimeout={300}>
                                {this.props.show_popup ? (<LoginPopup/>) : (false)}
                            </CSSTransitionGroup>
                            <Route path="/" component={Header}/>
                            <Switch>
                                <Route exact path="/" component={Homepage}/>
                                <Route exact path="/thanks-donate" component={ThxDonate}/>
                                <Route exact path="/faq" component={Faq}/>
                                <Route exact path="/success-stories" component={successStories}/>
                                <Route exact path="/allcampaing" component={SearchPage}/>
                                <Route exact path="/registration" render={(props) => {
                                    return !this.IsUser() ? <Registration {...props}/> : <Redirect to="/"/>
                                }}/>
                                <Route exact path="/confidentiality" component={confidentiality}/>
                                <Route exact path="/rules" component={Rules}/>
                                <Route exact path="/about" component={about}/>
                                <Route exact path="/donate" component={donate}/>
                                <Route exact path="/account" component={() => {
                                    return this.IsUser() ? <UserAccount/> : <Redirect to="/"/>
                                }}/>
                                <Route exact path="/usercard/:value" component={usercard}/>
                                <Route exact path="/create-fundraiser" render={(props) => {
                                    return this.IsUser() ? <CreateFundraiser {...props}/> : <Redirect to="/"/>
                                }}/>

                                <Route exact path="/edit-fundraiser" render={(props) => {
                                    return this.IsUser() ? <CreateFundraiser {...props}/> : <Redirect to="/"/>
                                }}/>
                                <Route exact path="/registration-confirm" component={RegistrationConfirm}/>
                                <Route exact path="/thanks-create" render={(props) => {
                                    return this.IsUser() ? <ThxCreate {...props}/> : <Redirect to="/"/>
                                }}/>
                                <Route component={pageNotFound}/>
                            </Switch>
                            <Route path="/" component={Footer}/>
                        </Fragment>
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        data: store,
        user_id: store.user_id,
        roles: store.user_roles,
        show_popup: store.show_popup
    }
};

const mapDispatchToProps = dispatch => ({
    addUserId: string => dispatch(addUserId(string)),
    addUserRole: array => dispatch(addUserRole(array)),
    addUserInfo: object => dispatch(addUserInfo(object)),
    changePopup: boolean => dispatch(changePopup(boolean))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainRouting);

