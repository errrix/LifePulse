import React from "react";
import {Link} from "react-router-dom";

import validator from './components/validator'

class Registration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name:'',
            last_name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: ''
        };
        this.sendData = this.sendData.bind(this);
        this.StateValue = this.StateValue.bind(this);
    }

    sendData(e) {
        e.preventDefault(e);
        // console.log('some test');
        // console.log(this.state.validate_first_name, this.state.validate_email, this.state.validate_password, this.state.validate_confirm);
        // if(this.state.validate_first_name &&
        //     this.state.validate_lastName &&
        //     this.state.validate_email &&
        //     this.state.validate_password &&
        //     this.state.validate_confirm) {
            fetch("http://165.227.11.173:3001/api/users/newuser", {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        "first_name": this.state.first_name,
                        "last_name": this.state.last_name,
                        "email": this.state.email,
                        "password": this.state.password,

                    })
                }
            ).then((ressponse) => ressponse.json()).then((response) => {
                console.log(response)
            })
        // }
    }

    StateValue(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="registration-block">


                <div className="container">
                    {/*<div>{this.state.first_name}</div>*/}
                    {/*<div>{this.state.last_name}</div>*/}
                    {/*<div>{this.state.password}</div>*/}
                    {/*<div>{this.state.confirmPassword}</div>*/}
                    {/*<div>{this.state.email}</div>*/}
                    {/*<div>{this.state.phone}</div>*/}
                    <h1 className="h2Header">
                        Регистрация
                    </h1>

                    <div className="block-line"></div>

                    <div className="registration-block-main-form">
                        <form action="" className="main-form m--registration" onSubmit={this.sendData}>
                            <div className="input-wrapper">
                                <label className="label-input">
                                    <span>Имя:</span>
                                    <input type="text" placeholder="Василий" name="first_name"
                                           onChange={this.StateValue} onBlur={validator.firstName}/>
                                    <span className="error"> Поле не заполнено</span>
                                </label>

                                <label className="label-input">
                                    <span>Фамилия:</span>
                                    <input type="text" placeholder="Васильев" name="last_name"
                                           onChange={this.StateValue} onBlur={validator.lastName}/>
                                    <span className="error"> Поле не заполнено</span>
                                </label>
                            </div>

                            <div className="input-wrapper">
                                <label className="label-input">
                                    <span>Ваша почта:</span>
                                    <input type="email" placeholder="vasiliy@lifespulse.com" name="email"
                                           onChange={this.StateValue} onBlur={validator.email}/>
                                    <span className="error"> Некорректный email. Попробуйте еще раз</span>
                                </label>

                                <label className="label-input">
                                    <span>Номер телефона (не обязательно):</span>
                                    <input type="tel" placeholder="+38  (096) 33 33 333" name="phone"
                                           onChange={this.StateValue}/>
                                    <span className="info">Ваш номер телефона - конфиденциальная информация. Он не будет доступен другим пользователям</span>
                                    <span className="error"> Неправильный ввод номера. Попробуйте еще раз</span>
                                </label>
                            </div>

                            <div className="input-wrapper">
                                <label className="label-input m--password">
                                    <span>Пароль:</span>
                                    <input type="password" placeholder="Введите пароль" name="password"
                                           onChange={this.StateValue} onBlur={validator.password}/>
                                    <span className="info">Пароль должен состоять из букв и цифер, содержать минимум 6 знаков, 3 из которых уникальные</span>
                                    {/*<span className="error"> Пароль должен состоять из букв и цифер, содержать минимум 6 знаков, 3 из которых уникальные</span>*/}
                                </label>

                                <label className="label-input m--password">
                                    <span>Повторите пароль:</span>
                                    <input type="password" placeholder="Введите пароль" name="confirmPassword"
                                           onChange={this.StateValue} onBlur={validator.confirmPassword}/>
                                    <span className="error"> Пароли не совпадают. Повторите еще раз</span>
                                </label>
                            </div>


                            <label className="label-checkbox">
                                <input className="check__input" type="checkbox"/>
                                <span className="check__box"/>
                                Я соглашаюсь с <Link to="/confidentiality" target="_blank"> Политикой конфиденциальности</Link> и
                                <Link to="/rules" target="_blank"> Правилами пользования сайтом</Link>
                            </label>

                            <div className="button-wrapper">
                                <button className="btn m--with-loader" type="submit">

                                    <span>Создать профиль</span>

                                    <span className="loader"/>

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