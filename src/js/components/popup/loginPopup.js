import React from "react";
import {Link} from 'react-router-dom';



class LoginPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            validate_email: false,
            password: '',
        };

        this.closePopup = this.closePopup.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
        this.inputEmail = this.inputEmail.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.inputPassword = this.inputPassword.bind(this);
    }

     closePopup(e) {
        if(!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.updateStatusPopup(false);
            // document.querySelector('.popup').classList.add('hide-popup');
        }
    }

    inputEmail(e) {
        this.setState({email: e.target.value})
    }

    validateEmail(e) {
        if(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{1,6}$/.test(e.target.value)) {
            this.setState({validate_email: true});
            e.target.parentNode.classList.remove('label-error');
        } else {
            this.setState({validate_email: false});
            e.target.parentNode.classList.add('label-error');
        }
    }

    inputPassword(e) {
        this.setState({password: e.target.value})
    }

    submitLogin(e) {
        e.preventDefault();
        if(!this.state.validate_email) {
            fetch('http://165.227.11.173:3001/api/users/login', {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                // 'cache-control': 'no-cache',
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
                }).then((json) => {
                    console.log(json.response.id);
                    this.props.addToken(json.response.id);
                    this.props.updateStatusPopup(false);
            })
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
                                    <input type="email" onChange={this.inputEmail} onBlur={this.validateEmail}/>
                                    <span className="error"> Некорректный email. Попробуйте еще раз</span>
                                </label>
                                <div className="label-password-top-block">
                                    <span>Пароль:</span>
                                    <button className="forgot-password" type="button">
                                        Забыли пароль?
                                    </button>
                                </div>
                                <label className="label-input">
                                    <input type="password" onChange={this.inputPassword}/>
                                    <span className="error">Неверный пароль. Введите еще раз</span>
                                </label>
                                <label className="label-checkbox">

                                    <input type="checkbox"/>
                                    <span>
                             Запомнить меня
                        </span>
                                </label>

                                <div className="button-wrapper">
                                    <button type="submit" className="btn m--with-loader">
                                <span>
                                     Войти
                                </span>
                                        <span className="loader"></span>
                                    </button>
                                </div>

                            </form>
                            <Link to='/registration' className="no-account">Нет аккаунта?</Link>
                        </div>
                        <div className="popup-step m--restore-password hide-step">
                            <button type="button" className="button-back">
                                назад
                            </button>

                            <h6>
                                Введите email, который Вы указывали при регистрации:
                            </h6>

                            <form className="main-form" action="">
                                <label className="label-input">
                                    <input type="text"/>
                                    <span className="error">Некорректный email. Попробуйте еще раз</span>
                                </label>
                                <div className="button-wrapper">
                                    <button className="btn m--with-loader" type="submit">

                                        <span>отправить</span>

                                        <span className="loader"></span>

                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="popup-step m--thanks hide-step"></div>
                    </div>
                </div>
            </div>

        )
    }
};

export default LoginPopup;