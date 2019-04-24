import React from "react";
import {Link, Redirect} from 'react-router-dom';
import CSSTransitionGroup from "react-addons-css-transition-group"

import LoginPopup from './popup/loginPopup'

import {addUserId, addUserRole } from "./../actions";
import {connect} from "react-redux";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPopup: false
        };

        this.openPopup = this.openPopup.bind(this);
        this.handlePopup = this.handlePopup.bind(this);
    }

    componentDidMount() {
        fetch('http://165.227.11.173:3001/api/users/mydata', {
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
                this.props.addUserIdAction(data.response.id);
                this.props.addUserRoleAction(data.response.roles);

            })
    }

    toggleMobMenu() {
        document.querySelector('.navigation-side-mobile').classList.toggle('active-nav-mobile');
    }

    openPopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    handlePopup(value) {
        this.setState({
            showPopup: value
        })
    }

    render() {
        const {addUserIdAction, tokenData, addUserRoleAction} = this.props;
        return (

            <div>
                <CSSTransitionGroup transitionName="logn-popup"
                                    transitionEnter={true}
                                    transitionEnterTimeout={300}
                                    transitionLeave={true}
                                    transitionLeaveTimeout={300}>
                    {this.state.showPopup ? (<LoginPopup updateStatusPopup={this.handlePopup} addUserId={addUserIdAction} addUserRole={addUserRoleAction}/>) : (false)}
                </CSSTransitionGroup>

                <header className="main-header">
                    <div className="main-header-wrapper">
                        <div className="logo-side">
                            <Link to='/'>
                                <img src="/img/img-logo.png" alt="lifespulse logo"/>
                            </Link>
                        </div>

                        <div className="navigation-side">
                            <ul className="navigation">
                                <li>
                                    <Link to='/faq'>F.A.Q.</Link>
                                </li>
                                <li>
                                    <Link to='/'>Успешные сборы</Link>
                                </li>
                                <li>
                                    <Link to='/allcampaing'>Начать помогать</Link>
                                </li>
                                <li>
                                    <Link to='/create-fundraiser'>Подать заявку</Link>
                                </li>
                            </ul>


                            {
                                (this.props.tokenData) ? (
                                    <div className="button-block">
                                        <Link to='/account' className="header-login-popup">Личный кабинет</Link>
                                        <Link to='/admin' className="header-login-popup">В админку</Link>
                                    </div>
                                ) : (
                                    <div className="button-block">
                                        <button className="header-search">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    d="M495.6 466.4L373.8 339.6c31.3-37.2 48.5-84.1 48.5-132.9C422.3 92.7 329.5 0 215.6 0S8.8 92.7 8.8 206.7s92.7 206.7 206.7 206.7c42.8 0 83.6-12.9 118.4-37.4l122.8 127.7c5.1 5.3 12 8.3 19.4 8.3 7 0 13.6-2.7 18.7-7.5 10.8-10.3 11.2-27.4.8-38.1zm-280-412.5c84.3 0 152.8 68.5 152.8 152.8s-68.5 152.8-152.8 152.8S62.8 291 62.8 206.7 131.3 53.9 215.6 53.9z"
                                                    fill="#e5e5e5"/>
                                            </svg>
                                        </button>

                                        <button className="header-login-popup" onClick={this.openPopup}>
                                            Вход
                                        </button>

                                        <Link to='/registration' className="header-login-popup">Регистрация</Link>
                                    </div>

                                )}


                        </div>

                        <div className="header__navToggle" onClick={this.toggleMobMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="459" height="459" viewBox="0 0 459 459"><path d="M0 382.5h459v-51H0v51zM0 255h459v-51H0v51zM0 76.5v51h459v-51H0z"/></svg>
                        </div>

                        <div className="navigation-side-mobile">
                            <ul className="navigation">
                                <li>
                                    <Link to='/faq'>F.A.Q.</Link>
                                </li>
                                <li>
                                    <Link to='/'>Успешные сборы</Link>
                                </li>
                                <li>
                                    <Link to='/allcampaing'>Начать помогать</Link>
                                </li>
                                <li>
                                    <Link to='/create-fundraiser'>Подать заявку</Link>
                                </li>
                            </ul>


                            {
                                (this.props.tokenData) ? (
                                    <div className="button-block">
                                        <Link to='/account' className="header-login-popup">Личный кабинет</Link>
                                        <Link to='/admin' className="header-login-popup">В админку</Link>
                                    </div>
                                ) : (
                                    <div className="button-block">
                                        <button className="header-search">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path
                                                    d="M495.6 466.4L373.8 339.6c31.3-37.2 48.5-84.1 48.5-132.9C422.3 92.7 329.5 0 215.6 0S8.8 92.7 8.8 206.7s92.7 206.7 206.7 206.7c42.8 0 83.6-12.9 118.4-37.4l122.8 127.7c5.1 5.3 12 8.3 19.4 8.3 7 0 13.6-2.7 18.7-7.5 10.8-10.3 11.2-27.4.8-38.1zm-280-412.5c84.3 0 152.8 68.5 152.8 152.8s-68.5 152.8-152.8 152.8S62.8 291 62.8 206.7 131.3 53.9 215.6 53.9z"
                                                    fill="#e5e5e5"/>
                                            </svg>
                                        </button>

                                        <button className="header-login-popup" onClick={this.openPopup}>
                                            Вход
                                        </button>

                                        <Link to='/registration' className="header-login-popup">Регистрация</Link>
                                    </div>
                                )}
                        </div>
                    </div>
                </header>
            </div>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        data: store,
        tokenData: store.user_id
    }
};

const mapDispatchToProps = dispatch => ({
    addUserIdAction: string => dispatch(addUserId(string)),
    addUserRoleAction: array => dispatch(addUserRole(array)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);