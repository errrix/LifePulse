import React from "react";

import url from "../../modules/url";
import {addUserId, addUserInfo, addUserRole, changePopup} from "../../actions";
import {connect} from "react-redux";

class adminLogin extends React.Component {

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

        this.submitLogin = this.submitLogin.bind(this);
        this.inputEmail = this.inputEmail.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.inputPassword = this.inputPassword.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
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
                    console.log(error);
                });
            }
        }, 0)

    }

    render() {
        return (
            <div>
                <div className="admin-login-block">
                    <div className="admin-login-block-wrapper container">
                        <div className="popup-content-block">
                            <div className="popup-content-block-wrapper">
                                <h1>ВХОД</h1>
                                <div className="popup-step m--login">
                                    <form className="main-form"
                                          onSubmit={this.submitLogin}>
                                        <label className="label-input">
                                            <span>Ваша почта:</span>
                                            <input type="email"
                                                   id="login-email"
                                                   onChange={this.inputEmail}
                                                   onBlur={this.validateEmail}
                                                   autoComplete="email"
                                            />
                                            <span className="error"> Некорректный email. Попробуйте еще раз</span>
                                        </label>
                                        <div className="label-password-top-block">
                                            <span>Пароль:</span>
                                        </div>
                                        <label className="label-input">
                                            <input type="password"
                                                   id="login-password"
                                                   onChange={this.inputPassword}
                                                   onBlur={this.validatePassword}
                                                   autoComplete="password"
                                            />
                                            <span className="error">Неверный пароль. Введите еще раз</span>
                                        </label>
                                        <label className="label-checkbox">
                                            <input className="check__input" type="checkbox"/>
                                            <span className="check__box"/>
                                            Запомнить меня
                                        </label>
                                        <div className="button-wrapper">
                                            <button type="submit" className="btn m--with-loader">
                                                <span>Войти</span>
                                                <span className="loader"/>
                                            </button>
                                        </div>

                                    </form>

                                </div>
                            </div>

                        </div>
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


export default connect(mapStateToProps, mapDispatchToProps) (adminLogin);