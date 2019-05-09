import React from "react";
import {Link} from 'react-router-dom';

class adminHeader extends React.Component {

    render() {
        return (
                <header className="main-header m--account-admin">

                    <div className="main-header-wrapper">
                        <div className="logo-side">
                            <Link to="/">
                                <img src="/img/icon-logo.svg" alt="lifespulse logo"/>
                            </Link>
                        </div>
                        <div className="button-block">
                            <span>Текущая почта юзера</span>
                            <a href="/">Выйти</a>
                        </div>
                    </div>
                </header>
        )
    }
};

export default adminHeader;