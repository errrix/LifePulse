import React from "react";
import {Link} from 'react-router-dom';
import {addUserId, addUserInfo, addUserRole, changePopup} from "../../actions";
import {connect} from "react-redux";
import url from "../../modules/url"


class LoginPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            validate_email: false,
            password: '',
            validate_password: false,
            validate_email_message: 'Некорректный email.',
            validate_email_message_from_response: 'Некорректный email или пароль'
        };

        this.closePopup = this.closePopup.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
        this.inputEmail = this.inputEmail.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.inputPassword = this.inputPassword.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    closePopup(e) {
        if (!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.changePopup(false);
            // document.querySelector('.popup').classList.add('hide-popup');
        }
    }

    inputEmail(e) {
        this.setState({email: e.target.value})
    }

    validateEmail() {
        let elem = document.getElementById("login-email");
        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,6}$/.test(elem.value)) {
            this.setState({validate_email: true});
            elem.parentNode.classList.remove('label-error');
        } else {
            this.setState({validate_email: false});
            elem.parentNode.classList.add('label-error');
            elem.parentNode.querySelector('.error').textContent = this.state.validate_email_message;
        }
    }

    inputPassword(e) {
        this.setState({password: e.target.value})
    }

    validatePassword() {
        let elem = document.getElementById("login-password");
        if (elem.value !== '') {
            this.setState({validate_password: true});
            elem.parentNode.classList.remove('label-error');
        } else {
            this.setState({validate_password: false});
            elem.parentNode.classList.add('label-error');
        }
    }

    submitLogin(e) {
        e.preventDefault();
        this.validatePassword();
        this.validateEmail();
        // console.log(this.state.validate_email, this.state.validate_password);
        setTimeout(()=>{
            if (this.state.validate_email && this.state.validate_password) {
                document.querySelector('.loader').classList.add('active-loader', 'm--loader');
                fetch(`${url}/api/users/login`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify({
                        "email": this.state.email,
                        "password": this.state.password
                    })
                })
                    .then(function (response) {
                        return response.json()
                    }).then((data) => {
                    if (data.success) {
                        this.props.addUserId(data.response.id);
                        this.props.addUserRole(data.response.roles);
                        this.props.changePopup(false);
                        document.querySelector('.navigation-side-mobile').classList.remove('active-nav-mobile');
                    } else {
                        let errorElem = document.querySelector('.email-error');
                        errorElem.textContent = this.state.validate_email_message_from_response;
                        errorElem.parentNode.classList.add('label-error');
                        document.querySelector('.loader').classList.remove('active-loader', 'm--loader');
                    }
                }).catch(function (error) {
                    // console.log(error);
                });
            }
        }, 0)

    }

    render() {
        return (
            <div className="popup" onMouseDown={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step m--login">
                            <form className="main-form" action="" onSubmit={this.submitLogin}>
                                <label className="label-input">
                                    <span>Ваша почта:</span>
                                    <input type="email"
                                           id="login-email"
                                           onChange={this.inputEmail}
                                           onBlur={this.validateEmail}
                                           autoComplete="email"
                                    />
                                    <span className="error email-error"/>
                                </label>
                                <label className="label-input">
                                    <span>Пароль:</span>
                                    <input type="password"
                                           id="login-password"
                                           onChange={this.inputPassword}
                                           onBlur={this.validatePassword}
                                           autoComplete="password"
                                    />
                                    <span className="error">Введите пароль</span>
                                </label>
                                <label className="label-checkbox">
                                    <input className="check__input" type="checkbox"/>
                                    <span className="check__box"/>
                                        Запомнить меня
                                </label>

                                <div className="button-wrapper">
                                    <button type="submit" className="btn m--with-loader">
                                <span>
                                     Войти
                                </span>
                                        <span className="loader"/>
                                    </button>
                                </div>

                            </form>
                            <div className="label-password-top-block">
                                <Link className="no-account" to="/registration">Нет аккаунта</Link>
                            </div>
                        </div>

                        {/*<div className="popup-step m--restore-password hide-step">*/}
                        {/*<button type="button" className="button-back">*/}
                        {/*назад*/}
                        {/*</button>*/}

                        {/*<h6>*/}
                        {/*Введите email, который Вы указывали при регистрации:*/}
                        {/*</h6>*/}

                        {/*<form className="main-form" action="">*/}
                        {/*<label className="label-input">*/}
                        {/*<input type="text"/>*/}
                        {/*<span className="error">Некорректный email. Попробуйте еще раз</span>*/}
                        {/*</label>*/}
                        {/*<div className="button-wrapper">*/}
                        {/*<button className="btn m--with-loader" type="submit">*/}

                        {/*<span>отправить</span>*/}

                        {/*<span className="loader"/>*/}

                        {/*</button>*/}
                        {/*</div>*/}
                        {/*</form>*/}
                        {/*</div>*/}
                        {/*<div className="popup-step m--thanks hide-step"/>*/}
                    </div>
                </div>
            </div>

        )
    }
};

const mapStateToProps = (store) => {
    return {
        data: store,
        user_id: store.user_id
    }
};

const mapDispatchToProps = dispatch => ({
    addUserId: string => dispatch(addUserId(string)),
    addUserRole: array => dispatch(addUserRole(array)),
    addUserInfo: object => dispatch(addUserInfo(object)),
    changePopup: boolean => dispatch(changePopup(boolean))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);
