import React from "react";
import {Link} from "react-router-dom";

import validator from './components/validator'

class Registration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name:'',
            validate_first_name: false,
            last_name: '',
            validate_lastName: false,
            email: '',
            validate_email: false,
            password: '',
            validate_password: false,
            confirmPassword: '',
            validate_confirm: false,
            phone: '',
            validate_phone: false
        };

        this.sendData = this.sendData.bind(this);
        this.inputName = this.inputName.bind(this);
        this.validateName = this.validateName.bind(this);
        this.inputLastName = this.inputLastName.bind(this);
        this.validateLastName = this.validateLastName.bind(this);
        this.inputEmail = this.inputEmail.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.inputPassword = this.inputPassword.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.inputConfirmPassword = this.inputConfirmPassword.bind(this);
        this.validateConfirm = this.validateConfirm.bind(this);
        this.inputPhone = this.inputPhone.bind(this);
        // this.inputCheckbox = this.inputCheckbox.bind(this);
    }

    inputName(e) {
      this.setState({first_name: e.target.value})
    }

    validateName(e) {
        if(e.target.value.length > 2 && e.target.value.length < 20) {
            this.setState({validate_first_name: true});
            e.target.parentNode.classList.remove('label-error');
        } else {
            this.setState({validate_first_name: false});
            e.target.parentNode.classList.add('label-error');
        }
    }

    inputLastName(e) {
      this.setState({last_name: e.target.value})
    }

    validateLastName(e) {
        if(e.target.value.length > 2 && e.target.value.length < 20) {
            this.setState({validate_lastName: true})
        } else {
            this.setState({validate_lastName: false});
            e.target.parentNode.classList.add('label-error');
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

    validatePassword(e) {
        if(/[a-z0-9]{6,12}$/.test(e.target.value)) {
            this.setState({validate_password: true});
            e.target.parentNode.classList.remove('label-error');
        } else {
            this.setState({validate_password: false});
            e.target.parentNode.classList.add('label-error');
        }
    }

    inputConfirmPassword(e) {
        this.setState({confirmPassword: e.target.value})
    }

    validateConfirm(e) {
        if(this.state.password === e.target.value) {
            this.setState({validate_confirm: true});
            e.target.parentNode.classList.remove('label-error');
        } else {
            this.setState({validate_confirm: false});
            e.target.parentNode.classList.add('label-error');
        }
    }

    inputPhone(e) {
        this.setState({phone: e.target.value})
    }

    sendData(e) {
        e.preventDefault();
        console.log('some test');
        console.log(this.state.validate_first_name, this.state.validate_email, this.state.validate_password, this.state.validate_confirm);
        if(this.state.validate_first_name &&
            this.state.validate_lastName &&
            this.state.validate_email &&
            this.state.validate_password &&
            this.state.validate_confirm) {
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
        }

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
                                    <input type="text" placeholder="Василий" onChange={this.inputName} onBlur={this.validateName}/>
                                    <span className="error"> Поле не заполнено</span>
                                </label>

                                <label className="label-input">
                                    <span>Фамилия:</span>
                                    <input type="text" placeholder="Васильев" onChange={this.inputLastName} onBlur={this.validateLastName}/>
                                    <span className="error"> Поле не заполнено</span>
                                </label>
                            </div>

                            <div className="input-wrapper">
                                <label className="label-input">
                                    <span>Ваша почта:</span>
                                    <input type="email" placeholder="vasiliy@lifespulse.com" onChange={this.inputEmail} onBlur={this.validateEmail}/>
                                    <span className="error"> Некорректный email. Попробуйте еще раз</span>
                                </label>

                                <label className="label-input">
                                    <span>Номер телефона (не обязательно):</span>
                                    <input type="tel" placeholder="+38  (096) 33 33 333" onChange={this.inputPhone}/>
                                    <span className="info">Ваш номер телефона - конфиденциальная информация. Он не будет доступен другим пользователям</span>
                                    <span className="error"> Неправильный ввод номера. Попробуйте еще раз</span>
                                </label>
                            </div>

                            <div className="input-wrapper">
                                <label className="label-input m--password">
                                    <span>Пароль:</span>
                                    <input type="password" placeholder="Введите пароль" onChange={this.inputPassword} onBlur={this.validatePassword}/>
                                    <span className="info">Пароль должен состоять из букв и цифер, содержать минимум 6 знаков, 3 из которых уникальные</span>
                                    {/*<span className="error"> Пароль должен состоять из букв и цифер, содержать минимум 6 знаков, 3 из которых уникальные</span>*/}
                                </label>

                                <label className="label-input m--password">
                                    <span>Повторите пароль:</span>
                                    <input type="password" placeholder="Введите пароль " onChange={this.inputConfirmPassword} onBlur={this.validateConfirm}/>
                                    <span className="error"> Пароли не совпадают. Повторите еще раз</span>
                                </label>
                            </div>


                            <label className="label-checkbox">

                                <input type="checkbox" onChange={this.inputCheckbox}/>
                                <span>
                        <span>
                             Я соглашаюсь с <Link to="/confidentiality" target="_blank"> Политикой конфиденциальности</Link> и
                            <Link to="/rules" target="_blank"> Правилами пользования сайтом</Link>
                        </span>
                    </span>
                            </label>

                            <div className="button-wrapper">
                                <button className="btn m--with-loader" type="submit">

                                    <span>Создать профиль</span>

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