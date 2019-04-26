import React, {Fragment} from 'react';

import {Redirect, Route, Switch} from "react-router";
import adminLogin from "../../pages/admin/admin-login";
import appeal from "../../pages/admin/appeal";
import application from "../../pages/admin/cardStatus/draft";
import active from "../../pages/admin/cardStatus/active";
import verify from "../../pages/admin/cardStatus/verify";
import ban from "../../pages/admin/cardStatus/ban";
import getmoney from "../../pages/admin/cardStatus/getmoney";
import archive from "../../pages/admin/cardStatus/archive";
import categories from "../../pages/admin/categories/categories";
import staff from "../../pages/admin/staff/staff";
import users from "../../pages/admin/users";
import viewCampaign from "../../pages/admin/view-campaign";
import {connect} from "react-redux";
import {addUserId, addUserInfo, addUserRole} from "../../actions";

class AdminRouting extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        if (this.props.roles.length ===0 ) {
            fetch('http://165.227.11.173:3001/api/users/auth', {
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
                    console.log(data);
                    this.props.addUserIdAction(data.response.id);
                    this.props.addUserRole(data.response.roles);
                })
        }
    }

    statusRole() {
        if (
            (this.props.roles.indexOf('admin') !== -1 || this.props.roles.indexOf('moderator') !== -1)
            && this.props.roles.length !== 0
        ) {
            return <Fragment>
                <Switch>
                    <Route exact path="/admin" render={ ()=> <Redirect to="/admin/categories"/> }/>
                    <Route exact path="/admin/appeal" component={appeal}/>
                    <Route exact path="/admin/application" component={application}/>
                    <Route exact path="/admin/active" component={active}/>
                    <Route exact path="/admin/ban" component={ban}/>
                    <Route exact path="/admin/verify" component={verify}/>
                    <Route exact path="/admin/get-money" component={getmoney}/>
                    <Route exact path="/admin/archive" component={archive}/>
                    <Route exact path="/admin/categories" component={categories}/>
                    <Route exact path="/admin/staff" component={staff}/>
                    <Route exact path="/admin/users" component={users}/>
                    <Route path="/admin/view-campaign/:id" component={viewCampaign}/>
                </Switch>
            </Fragment>
        } else if(this.props.roles.length === 0) {
           return <Route exact path="/admin" component={adminLogin}/>
        } else {
            return <Redirect to={"/"}/>
        }
    }

    render() {
        return (
            <Fragment>
                {this.statusRole()}
            </Fragment>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        data: store,
        roles: store.user_roles
    }
};

const mapDispatchToProps = dispatch => ({
    addUserIdAction: string => dispatch(addUserId(string)),
    addUserRole: array => dispatch(addUserRole(array)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminRouting);

