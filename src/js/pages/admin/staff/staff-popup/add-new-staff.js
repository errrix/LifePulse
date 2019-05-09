import React from "react";

import url from "../../../../modules/url"

class AddNewStaffPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            roles: '',
            password: '',
            confirmPassword: ''
        };

        this.closePopup = this.closePopup.bind(this);
        this.newStaff = this.newStaff.bind(this);
        this.staffInfo = this.staffInfo.bind(this);
    }

    componentDidMount() {
        document.querySelector('input').focus();
    }

    closePopup(e) {
        if (!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.updateStatusPopup(false);
        }
    }

    staffInfo(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
        console.log(this.state.name)
    }

    newStaff(e) {
        e.preventDefault(e);
        document.querySelector('.loader').classList.add('active-loader', 'm--loader');
        // if (this.state.validate_confirm) {
            fetch(`${url}/api/users/newuser`, {
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

    render() {
        return (
            <div className="popup m--admin-add-new-staff" onClick={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step">

                            <form className="main-form" onSubmit={this.newStaff}>
                                <h3>Добавить пользователя</h3>
                                <label className="label-input">
                                    <span>Фамилия</span>
                                    <input type="text" required name="last_name" onChange={this.staffInfo}/>
                                    <span className="error">Введите фамилию</span>
                                </label>

                                <label className="label-input">
                                    <span>Имя</span>
                                    <input type="text" required name="first_name" onChange={this.staffInfo}/>
                                    <span className="error">Введите имя</span>
                                </label>

                                <label className="label-input">
                                    <span>Email</span>
                                    <input type="email" required name="email" onChange={this.staffInfo}/>
                                    <span
                                        className="error"> Некорректный email. Попробуйте еще раз</span>
                                </label>

                                <label className="label-select">
                                    <span>Роль в комманде</span>
                                    <select name="roles" onChange={this.staffInfo} value={this.state.roles}>
                                        <option value="ceo">СЕО</option>
                                        <option value="moderator">Модератор</option>
                                        <option value="admin">Администратор</option>
                                        <option value="accountant">Бухгалтер</option>
                                    </select>
                                </label>

                                <label className="label-input">
                                    <span>Пароль</span>
                                    <input type="password" required name="password" onChange={this.staffInfo}/>
                                    <span className="error">Неверный пароль. Введите еще раз</span>
                                </label>

                                <label className="label-input">
                                    <span>Повторите пароль</span>
                                    <input type="password" required name="confirmPassword" onChange={this.staffInfo}/>
                                    <span className="error">Неверный пароль. Введите еще раз</span>
                                </label>

                                <div className="button-wrapper">
                                    <button type="submit" className="btn m--with-loader">
                                                             <span>
                                                                 Сохранить
                                                             </span>
                                        <span className="loader"></span>
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddNewStaffPopup;