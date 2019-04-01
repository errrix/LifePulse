import React from "react";
import {Link} from 'react-router-dom';


class LoginPopup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPopup: false
        };

        this.closePopup = this.closePopup.bind(this);
    }

     closePopup(e) {
        if(!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.updateStatusPopup(false);
            // document.querySelector('.popup').classList.add('hide-popup');
        }
    }

    render() {
        return (
            <div className="popup" onClick={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">

                        <div className="popup-step m--login">

                            <form className="main-form" action="">
                                <label className="label-input">
                                    <span>Ваша почта:</span>
                                    <input type="email" required/>
                                    <span className="error"> Некорректный email. Попробуйте еще раз</span>
                                </label>
                                <div className="label-password-top-block">
                                    <span>Пароль:</span>
                                    <button className="forgot-password" type="button">
                                        Забыли пароль?
                                    </button>
                                </div>
                                <label className="label-input">
                                    <input type="password" required/>
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
                                     войти
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