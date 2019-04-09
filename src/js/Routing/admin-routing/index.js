import React from 'react';

import {Route, Switch} from "react-router";
import adminLogin from "../../pages/admin/admin-login";
import appeal from "../../pages/admin/appeal";
import application from "../../pages/admin/application";
import ban from "../../pages/admin/ban";
import categories from "../../pages/admin/categories/categories";
import staff from "../../pages/admin/staff/staff";
import users from "../../pages/admin/users";
import viewCampaign from "../../pages/admin/view-campaign";

class AdminRouting extends React.Component {
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

export default AdminRouting;