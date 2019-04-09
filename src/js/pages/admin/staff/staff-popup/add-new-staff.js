import React from "react";

class AddNewStaff extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.closePopup = this.closePopup.bind(this);
        this.newStaff = this.newStaff.bind(this);
        this.staffName = this.staffName.bind(this);
        this.staffMail = this.staffMail.bind(this);
        this.staffRole = this.staffRole.bind(this);
        this.staffPassword = this.staffPassword.bind(this);
    }

    componentDidMount() {
        document.querySelector('input').focus();
    }

    closePopup(e) {
        if(!document.querySelector('.popup .popup-content-block').contains(e.target)) {
            this.props.updateStatusPopup(false);
        }
    }

    staffName(e) {
        this.setState({title: e.target.value});
    }

    newStaff(e) {
        e.preventDefault();
        // document.querySelector('.loader').classList.add('active-loader', 'm--loader');
        // fetch('http://165.227.11.173:3001/api/category/', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         "Authorization": this.props.tokenData
        //     },
        //     method: 'POST',
        //     body: JSON.stringify({
        //         "title": this.state.title
        //     })
        // })
        //     .then(function (response) {
        //         return response.json()
        //     }).then((json) => {
        //     this.props.updateStatusPopup(false);
        // })
    }

    render(){
        return (
            <div className="popup m--admin-add-new-staff hide-popup" onClick={this.closePopup}>
                <div className="popup-content-block">
                    <div className="popup-content-block-wrapper">
                        <div className="popup-step">

                            <form className="main-form" onSubmit={this.newStaff}>
                                <h3>Добавить пользователя</h3>
                                <label className="label-input">
                                    <span>Имя и фамилия</span>
                                    <input type="text" required onChange={this.staffName}/>
                                    <span className="error">Введите имя и фамилию</span>
                                </label>

                                <label className="label-input">
                                    <span>Email</span>
                                    <input type="email" required onChange={this.staffMail}/>
                                    <span
                                        className="error"> Некорректный email. Попробуйте еще раз</span>
                                </label>

                                <label className="label-select">
                                    <span>Роль в комманде</span>
                                    <select name="" id=""  onChange={this.staffRole}>
                                        <option value="">СЕО</option>
                                        <option value="">Модератор</option>
                                        <option value="">Администратор</option>
                                    </select>
                                </label>

                                <label className="label-input">
                                    <span>Пароль</span>
                                    <input type="password" required onChange={this.staffPassword}/>
                                    <span className="error">Неверный пароль. Введите еще раз</span>
                                </label>

                                <label className="label-input">
                                    <span>Повторите пароль</span>
                                    <input type="password" required onChange={this.staffPassword}/>
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

export default AddNewStaff;