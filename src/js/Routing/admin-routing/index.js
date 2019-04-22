import React, {Fragment} from 'react';

import {Redirect, Route, Switch} from "react-router";
import adminLogin from "../../pages/admin/admin-login";
import appeal from "../../pages/admin/appeal";
import application from "../../pages/admin/cardStatus/draft";
import ban from "../../pages/admin/ban";
import categories from "../../pages/admin/categories/categories";
import staff from "../../pages/admin/staff/staff";
import users from "../../pages/admin/users";
import viewCampaign from "../../pages/admin/view-campaign";
import {connect} from "react-redux";

class AdminRouting extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    statusRole() {
        if ( true
            // (this.props.tokenData.indexOf('admin') !== -1 || this.props.tokenData.indexOf('moderator') !== -1)
            // && this.props.tokenData.length !== 0
        ) {
            return <Fragment>
                <Switch>
                    <Route exact path="/admin" render={ ()=> <Redirect to="/admin/categories"/> }/>
                    <Route exact path="/admin/appeal" component={appeal}/>
                    <Route exact path="/admin/application" component={application}/>
                    <Route exact path="/admin/ban" component={ban}/>
                    <Route exact path="/admin/categories" component={categories}/>
                    <Route exact path="/admin/staff" component={staff}/>
                    <Route exact path="/admin/users" component={users}/>
                    <Route path="/admin/view-campaign/:id" component={viewCampaign}/>
                </Switch>
            </Fragment>
        } else if(this.props.tokenData.length === 0) {
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
        tokenData: store.user_role
    }
};

export default connect(mapStateToProps)(AdminRouting);

