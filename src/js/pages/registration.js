import React from "react";

class Registration extends React.Component {

    render() {
        return (
            <div className="registration-block">
                <div className="registration-block-wrapper container">
                    <h1>
                        регистрация пользователя
                    </h1>

                    <div className="social-registration">
                        <h3>
                            Вы можете войти через соцсети
                        </h3>

                        <div className="button-social-block">
                            <div className="button-registration m--facebook">
                                <img src="../../../dist/img/login-facebook.jpg" alt=""/>
                            </div>

                            <div className="button-registration m--google">
                                <img src="../../../dist/img/login-google.jpg" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="block-line"></div>

                    <div className="registration-block-main-form">
                        <h3>
                            или зарегистрироваться через email
                        </h3>

                        <form action="" className="main-form m--registration">
                            <div className="input-wrapper">
                                <label className="label-input">
                                    <span>Имя:</span>
                                    <input type="text" required placeholder="Василий"/>
                                    <span className="error"> Поле не заполнено</span>
                                </label>

                                <label className="label-input">
                                    <span>Фамилия (опционально):</span>
                                    <input type="text" placeholder="Васильев"/>
                                </label>
                            </div>

                            <div className="input-wrapper">
                                <label className="label-input">
                                    <span>Ваша почта:</span>
                                    <input type="email" required placeholder="vasiliy@lifespulse.com"/>
                                    <span className="error"> Некорректный email. Попробуйте еще раз</span>
                                </label>

                                <label className="label-input">
                                    <span>Ваш номер телефона (опционально):</span>
                                    <input type="tel" placeholder="+38  (096) 33 33 333"/>
                                    <span className="info">Ваш номер телефона - конфиденциальная информация. Он не будет доступен другим пользователям</span>
                                    <span className="error"> Неправильный ввод номера. Попробуйте еще раз</span>
                                </label>
                            </div>

                            <label className="label-input m--password">
                                <span>Пароль:</span>
                                <input type="password" required placeholder="Введите пароль"/>
                                <span className="info">Пароль должен состоять из букв и цифер, содержать минимум 6 знаков, 3 из которых уникальные</span>
                                <span className="error"> Пароль должен состоять из букв и цифер, содержать минимум 6 знаков, 3 из которых уникальные</span>
                            </label>

                            <label className="label-input m--password">
                                <span>Повторите пароль:</span>
                                <input type="password" required placeholder="Введите пароль"/>
                                <span className="error"> Пароли не совпадают. Повторите еще раз</span>
                            </label>

                            <label className="label-checkbox">

                                <input type="checkbox"/>
                                <span>
                        <span>
                              Я соглашаюсь с <a href="/"> Политикой конфиденциальности</a> и <a href="/">Правилами пользования сайтом</a>
                        </span>
                    </span>
                            </label>

                            <div className="button-wrapper">
                                <button className="btn m--with-loader" type="submit">

                                    <span>создать профиль</span>

                                    <span className="loader"></span>

                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="bottom-info-block">
                        <div>
                            <span> Есть вопросы?</span> <a href="mailto:support@info.com">support@info.com</a>
                        </div>

                        <div>
                            <a href="/">Уже есть аккаунт?</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};

export default Registration;