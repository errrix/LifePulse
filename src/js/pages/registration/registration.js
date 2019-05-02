import React from "react";
import {Link, Redirect} from "react-router-dom";

import validator from './components/validator'
import {changePopup} from "../../actions";
import {connect} from "react-redux";

class Registration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            reg_email: '',
            reg_password: '',
            phone: '',

            checkbox: false
        };
        this.sendData = this.sendData.bind(this);
        this.StateValue = this.StateValue.bind(this);
        this.openPopup = this.openPopup.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);


    }

    openPopup() {
        this.props.changePopup(true)
    }

    componentDidMount() {
        this.props.changePopup(false)
    }

    sendData(e) {
        e.preventDefault(e);
        if (validator.allValidFunc()) {
            document.querySelector('.loader').classList.add('active-loader', 'm--loader');
            fetch("http://165.227.11.173:3001/api/users/newuser", {
                    "method": "POST",
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify({
                        "first_name": this.state.first_name,
                        "last_name": this.state.last_name,
                        "email": this.state.reg_email,
                        "password": this.state.reg_password,
                        "phone": this.state.phone
                    })
                }
            ).then((ressponse) => ressponse.json()
            ).then((response) => {
                console.log(response)
                if (response.success) {
                    this.setState({
                        redirect_msg: 'регистрацию',
                        redirect: true
                    });
                }
            })
        }
    }

    StateValue(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleCheckbox() {
        this.setState({
            checkbox: !this.state.checkbox
        });
        setTimeout(() => {
            validator.checkbox()
        }, 0);
    }

    render() {
        return (
            <div>
                {
                    this.state.redirect ? (
                        <Redirect to={{
                            pathname: '/registration-confirm',
                            state: {action: this.state.redirect_msg}
                        }}/>
                    ) : (
                        <div className="registration-block">
                            <div className="container">

                                <h1 className="h2Header">
                                    Регистрация
                                </h1>

                                <div className="block-line"/>

                                <div className="registration-block-main-form">
                                    <form action="" className="main-form m--registration" onSubmit={this.sendData}>
                                        <div className="input-wrapper">
                                            <label className="label-input">
                                                <span>Имя:</span>
                                                <input type="text"
                                                       placeholder="Василий"
                                                       name="first_name"
                                                       id="first_name"
                                                       onChange={this.StateValue}
                                                       onBlur={validator.firstName}/>
                                                <span className="error"> Поле не заполнено</span>
                                            </label>

                                            <label className="label-input">
                                                <span>Фамилия:</span>
                                                <input type="text"
                                                       placeholder="Васильев"
                                                       name="last_name"
                                                       id="last_name"
                                                       onChange={this.StateValue}
                                                       onBlur={validator.lastName}/>
                                                <span className="error"> Поле не заполнено</span>
                                            </label>
                                        </div>

                                        <div className="input-wrapper">
                                            <label className="label-input">
                                                <span>Ваша почта:</span>
                                                <input type="email"
                                                       placeholder="vasiliy@lifespulse.com"
                                                       name="reg_email"
                                                       id="reg_email"
                                                       onChange={this.StateValue}
                                                       onBlur={validator.email}/>
                                                <span className="error"> Некорректный email. Попробуйте еще раз</span>
                                            </label>

                                            <label className="label-input">
                                                <span>Номер телефона (не обязательно):</span>
                                                <input type="tel"
                                                       placeholder="+38  (096) 33 33 333"
                                                       name="phone"
                                                       id="phone"
                                                       onChange={this.StateValue}/>
                                                <span className="info">Ваш номер телефона - конфиденциальная информация. Он не будет доступен другим пользователям</span>
                                                <span
                                                    className="error"> Неправильный ввод номера. Попробуйте еще раз</span>
                                            </label>
                                        </div>

                                        <div className="input-wrapper">
                                            <label className="label-input m--password">
                                                <span>Пароль:</span>
                                                <input type="password"
                                                       placeholder="Введите пароль"
                                                       name="reg_password"
                                                       id="reg_password"
                                                       onChange={this.StateValue}
                                                       onBlur={validator.password}/>
                                                <span className="info">Пароль должен состоять из букв и цифер, содержать минимум 6 знаков, 3 из которых уникальные</span>
                                            </label>

                                            <label className="label-input m--password">
                                                <span>Повторите пароль:</span>
                                                <input type="password"
                                                       placeholder="Введите пароль"
                                                       name="confirm_password"
                                                       id="confirm_password"
                                                       onBlur={validator.passwordConfirm}/>
                                                <span className="error"> Пароли не совпадают. Повторите еще раз</span>
                                            </label>
                                        </div>


                                        <label className="label-checkbox">
                                            <input className="check__input"
                                                   type="checkbox"
                                                   id="agree-checkbox"
                                                   onChange={this.handleCheckbox}
                                                   data-check={this.state.checkbox}
                                            />
                                            <span className="check__box"/>
                                            Я соглашаюсь с <Link to="/confidentiality" target="_blank"> Политикой
                                            конфиденциальности</Link> и
                                            <Link to="/rules" target="_blank"> Правилами пользования сайтом</Link>
                                            <span className="error">Подтвердите, что ознакомились с правилами</span>
                                        </label>

                                        <div className="button-wrapper">
                                            <button className="btn m--with-loader" type="submit">
                                                Создать профиль
                                                <span className="loader"/>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <div className="bottom-info-block">
                                    <div>
                                        <span> Есть вопросы?</span> <a
                                        href="mailto:support@info.com">lifespulse.info@gmail.com</a>
                                    </div>

                                    <div>
                                        <button className="header-login-popup" onClick={this.openPopup}>
                                            Уже есть аккаунт?
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        show_popup: store.show_popup
    }
};

const mapDispatchToProps = dispatch => ({
    changePopup: boolean => dispatch(changePopup(boolean))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);