import React from "react";
import {Link, Redirect} from 'react-router-dom';
import url from "../modules/url"


import {addUserId, addUserRole, addUserInfo, changePopup} from "./../actions";
import {connect} from "react-redux";

class Header extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPopup: false
        };

        this.openPopup = this.openPopup.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        e.preventDefault();
        fetch(`${url}/api/users/logout`, {
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
                // console.log(data);
                document.querySelector('.navigation-side-mobile').classList.remove('active-nav-mobile');
                document.querySelector('.header__navToggle').classList.remove('active-burger');
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

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            document.querySelector('.navigation-side-mobile').classList.remove('active-nav-mobile');
            document.querySelector('.header__navToggle').classList.remove('active-burger');
        }
    }

    toggleMobMenu() {
        document.querySelector('.navigation-side-mobile').classList.toggle('active-nav-mobile');
        document.querySelector('.header__navToggle').classList.toggle('active-burger');
    }

    openPopup() {
        this.props.changePopup(true)
    }

    IsUser() {
        return this.props.roles.indexOf('user') !== -1
    }



    render() {
        return (
            <div>
                <header className="main-header">
                    <div className="main-header-wrapper">
                        <div className="logo-side">
                            <Link to='/'>
                                <img src="/img/icon-logo.svg" alt="lifespulse logo"/>
                            </Link>
                        </div>

                        <div className="navigation-side">
                            <ul className="navigation">
                                <li>
                                    <Link to='/about'>О Нас</Link>
                                </li>
                                <li>
                                    <Link to='/faq'>F.A.Q.</Link>
                                </li>
                                <li>
                                    <Link to='/success-stories'>Успешные сборы</Link>
                                </li>
                                <li>
                                    <Link to='/allcampaing'>Начать помогать</Link>
                                </li>
                                <li>
                                    {
                                        this.IsUser() ? <Link to='/create-fundraiser'>Подать заявку</Link> :
                                            <button onClick={this.openPopup}>Подать заявку</button>
                                    }

                                </li>
                            </ul>


                            {
                                (this.props.user_id) ? (
                                    <div className="button-block">
                                        <Link to='/account' className="header-login-popup">Мой кабинет</Link>
                                        <button className="header-login-popup" onClick={this.handleLogout}>Выйти
                                        </button>
                                    </div>
                                ) : (
                                    <div className="button-block">

                                        <button className="header-login-popup" onClick={this.openPopup}>
                                            Вход
                                        </button>

                                        <Link to='/registration' className="header-login-popup">Регистрация</Link>
                                    </div>

                                )}


                        </div>

                        <div className="header__navToggle" onClick={this.toggleMobMenu}>
                            <span/>
                            <span/>
                            <span/>
                        </div>

                        <div className="navigation-side-mobile">
                            <ul className="navigation">
                                <li>
                                    <Link to='/about'>О Нас</Link>
                                </li>
                                <li>
                                    <Link to='/faq'>F.A.Q.</Link>
                                </li>
                                <li>
                                    <Link to='/success-stories'>Успешные сборы</Link>
                                </li>
                                <li>
                                    <Link to='/allcampaing'>Начать помогать</Link>
                                </li>
                                <li>
                                    {
                                        this.IsUser() ? <Link to='/create-fundraiser'>Подать заявку</Link>
                                                      : <button onClick={this.openPopup}>Подать заявку</button>
                                    }
                                </li>
                            </ul>


                            {
                                (this.props.user_id) ? (
                                    <div className="button-block">
                                        <Link to='/account' className="header-login-popup">Мой кабинет</Link>
                                        <button className="header-login-popup" onClick={this.handleLogout}>Выйти
                                        </button>

                                    </div>
                                ) : (
                                    <div className="button-block">
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);