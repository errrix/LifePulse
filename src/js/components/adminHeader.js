import React from "react";

class adminHeader extends React.Component {

    render() {
        return (
            <div>

                <header className="main-header m--account-admin">

                    <div className="main-header-wrapper">
                        <div className="logo-side">
                            <a href="/">
                                <img src="../../../dist/img/img-logo.png" alt=""/>
                            </a>
                        </div>
                        <div className="button-block">
                            <span>Текущая почта юзера</span>
                            <a href="/">Выйти</a>
                        </div>
                    </div>
                </header>
            </div>

        )
    }
};

export default adminHeader;