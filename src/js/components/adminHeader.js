import React from "react";
import {Link, Redirect} from 'react-router-dom';

import {addUserId, addUserRole, addUserInfo, changePopup} from "./../actions";
import {connect} from "react-redux";

class adminHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPopup: false
        };

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        fetch('http://165.227.11.173:3001/api/users/logout', {
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
                this.props.addUserId('');
                this.props.addUserRole([]);
                this.props.addUserInfo({
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                });
            })
    }



    render() {
        return (
                <header className="main-header m--account-admin">

                    <div className="main-header-wrapper">
                        <div className="logo-side">
                            <Link to="/admin/application">
                                <img src="/img/icon-logo.svg" alt="lifespulse logo"/>
                            </Link>
                        </div>
                        <div className="button-block">
                            <Link to="/">Вернуться на сайт</Link>
                            <button className="header-login-popup" onClick={this.handleLogout}>Выйти
                            </button>
                        </div>
                    </div>
                </header>
        )
    }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(adminHeader);