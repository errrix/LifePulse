import React from "react";
import {Link} from 'react-router-dom';


class LoginPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            validate_email: false,
            password: '',
            validate_password: false,
            validate_email_message: 'Некорректный email. Попробуйте еще раз',
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
            this.props.updateStatusPopup(false);
            // document.querySelector('.popup').classList.add('hide-popup');
        }
    }

    inputEmail(e) {
        this.setState({email: e.target.value})
    }

    validateEmail(e) {
        if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,6}$/.test(e.target.value)) {
            this.setState({validate_email: true});
            e.target.parentNode.classList.remove('label-error');
        } else {
            this.setState({validate_email: false});
            e.target.parentNode.classList.add('label-error');
            e.target.parentNode.querySelector('.error').textContent = this.state.validate_email_message;
        }
    }

    inputPassword(e) {
        this.setState({password: e.target.value})
    }

    validatePassword(e) {
        if (e.target.value !== '') {
            this.setState({validate_password: true});
            e.target.parentNode.classList.remove('label-error');
        } else {
            this.setState({validate_password: false});
            e.target.parentNode.classList.add('label-error');
        }
    }

    submitLogin(e) {
        e.preventDefault();
        if (!this.state.validate_email && !this.state.validate_password) {
            document.querySelector('.loader').classList.add('active-loader', 'm--loader');
            fetch('http://165.227.11.173:3001/api/users/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    email: "test@test.test",
                    password: "Test1234"
                    // "email": this.state.email,
                    // "password": this.state.password
                })
            })
                .then(function (response) {
                    return response.json()
                }).then((data) => {
                if (data.success) {
                    this.props.addUserId(data.response.id);
                    this.props.addUserRole(data.response.roles);
                    this.props.updateStatusPopup(false);
                    console.log(data.response);
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
    }

    render() {
        return (
            <div className="popup" onClick={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step m--login">
                            <form className="main-form" action="" onSubmit={this.submitLogin}>
                                <label className="label-input">
                                    <span>Ваша почта:</span>
                                    <input type="email" onChange={this.inputEmail} onBlur={this.validateEmail}
                                           autoComplete="email"/>
                                    <span className="error email-error"/>
                                </label>
                                <label className="label-input">
                                    <span>Пароль:</span>
                                    <input type="password" onChange={this.inputPassword} onBlur={this.validatePassword}
                                           autoComplete="password"/>
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
                                <button className="forgot-password" type="button">Забыли пароль</button>
                                <Link to='/registration' className="no-account">Нет аккаунта</Link>
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

export default LoginPopup;