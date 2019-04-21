import React from "react";

import AdminHeader from '../../components/adminHeader'

class adminLogin extends React.Component {

    render() {
        return (
            <div>
                <AdminHeader/>
                <div className="admin-login-block">
                    <div className="admin-login-block-wrapper container">
                        <div className="popup-content-block">
                            <div className="popup-content-block-wrapper">

                                <h1>ВХОД</h1>

                                <div className="popup-step m--login">

                                    <form className="main-form" action="">
                                        <label className="label-input">
                                            <span>Ваша почта:</span>
                                            <input type="email" required/>
                                            <span className="error"> Некорректный email. Попробуйте еще раз</span>
                                        </label>
                                        <div className="label-password-top-block">
                                            <span>Пароль:</span>
                                        </div>
                                        <label className="label-input">
                                            <input type="password" required/>
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


export default adminLogin;