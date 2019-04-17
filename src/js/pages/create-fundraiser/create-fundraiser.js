import React from "react";
import {Link} from "react-router-dom";

import validator from './components/validator'

class createFundraiser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            all_categories: [],

            status: '',
            text_preview: '',
            text_preview_valid: false,
            sum: '',
            full_name: '',
            account_number: '',
            bank: '',
            mfo: '',
            inn: '',
            phone: '',
            for_whom_name: '',
            country: '',
            address: '',
            birthday: '',
            category: '',
            main_text: '',
            photo_passports: '',
            photo_passports_sick: '',
            photo_preview: '',
            photo_documents: '',
        };

        this.StateValue = this.StateValue.bind(this);
    }

    getCategories() {
        fetch('http://165.227.11.173:3001/api/category', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            this.setState({all_categories: json.response});
        })
    }

    componentDidMount() {
        this.getCategories();
    }

    StateValue(e) {
        const {name, value} = e.target;
        this.setState({name: value});
        console.log(this.state.name)
    }

    render() {
        return (
            <div>
                <main className="new-campaign-block">
                    <div className="container">
                        <h1>
                            новая публикация
                        </h1>

                        <form action="" className="main-form new-campaign-form">

                            <div className="header-block">
                                <label className="label-input">
                                    <span>Укажите цель сбора средств: <br/> <span className="info">Вы можете ввести не меньше 80 и не больше 130 знаков, включая пробелы</span></span>
                                    <textarea maxLength="130" minLength="80" name="text_preview"
                                              onChange={this.StateValue} onBlur={validator.textPreview}
                                              placeholder="Острое нарушение мозгового кровообращения по ишемическому типу в басейне левой внутренней сонной артерии внутренней сонной артерии"/>

                                    <span className="error">Вы можете ввести не меньше 80 и не больше 130 знаков, включая пробелы</span>
                                </label>

                                <label className="label-input label-number">
                                    <span>Укажите сумму сбора</span>
                                    <span className="currency">ГРН</span>
                                    <input placeholder="100 000" type="number" name="sum" onChange={this.StateValue}
                                           onBlur={validator.sum}/>
                                    <span className="error">Неверный формат. Попробуйте еще раз</span>
                                </label>
                            </div>

                            <div className="block-line"/>

                            <label className="label-input">
                                <span>Ваше ФИО</span>
                                <input placeholder="Василий Васильев Васильевич" type="text" name="full_name"
                                       onChange={this.StateValue} onBlur={validator.fullName}/>
                                <span className="error">Неверный формат. Попробуйте еще раз</span>
                            </label>

                            <div className="bank-details">
                                <label className="label-input">
                                    <span>Номер счета</span>
                                    <input placeholder="Номер счета в Украинском банке" type="number"
                                           name="account_number" onChange={this.StateValue}
                                           onBlur={validator.accountNumber}/>
                                    <span className="error">Неверный формат. Попробуйте еще раз</span>
                                </label>
                                <label className="label-input">
                                    <span>Полное название банка</span>
                                    <input placeholder="АО КБ «ПРИВАТБАНК»" type="text" name="bank"
                                           onChange={this.StateValue} onBlur={validator.bank}/>
                                    <span className="error">Неверный формат. Попробуйте еще раз</span>
                                </label>
                                <label className="label-input">
                                    <span>МФО банка</span>
                                    <input placeholder="305299" type="number" name="mfo" onChange={this.StateValue}
                                           onBlur={validator.mfo}/>
                                    <span className="error">Неверный формат.</span>
                                </label>
                            </div>

                            <div className="phone-inn">
                                <label className="label-input">
                                    <span>Ваш номер телефона</span>
                                    <input type="tel" placeholder="+38 096 33 33 333" name="phone"
                                           onChange={this.StateValue} onBlur={validator.phone}/>
                                    <span className="error">Неверный формат. Попробуйте еще раз</span>
                                </label>

                                <label className="label-input">
                                    <span>Идентификационный код</span>
                                    <input placeholder="1234567890" type="number" name="inn" onChange={this.StateValue}
                                           onBlur={validator.inn}/>
                                    <span className="error">Неверный формат. Попробуйте еще раз</span>
                                </label>
                            </div>

                            <div className="block-line"/>

                            <div className="to-whom-campaign">
                                <div className="radio-wrapper">
                                    <label className="label-radio">
                                        <input type="radio" name="to-whom" defaultChecked value="self"/>
                                        <span>Я собираю деньги для себя</span>
                                    </label>

                                    <label className="label-radio">
                                        <input type="radio" name="to-whom" value="notself"/>
                                        <span>Я собираю деньги не для себя</span>
                                    </label>
                                </div>
                                <label className="label-input" id="another-recipient">
                                    <span>Для кого собираются средства?</span>
                                    <input placeholder="Василий Васильев Васильевич" type="text"/>
                                    <span className="error">Неверный формат. Попробуйте еще раз</span>
                                </label>
                            </div>

                            <div className="address-birth">
                                <label className="label-input">
                                    <span>Населенный пункт</span>
                                    <input placeholder="c. Григорьевка" type="text"/>
                                    <span className="error">Неверный формат. Попробуйте еще раз</span>
                                </label>

                                <label className="label-input">
                                    <span>Адрес</span>
                                    <input placeholder="ул. Бунина, 17, кв. 12" type="text"/>
                                    <span className="error">Неверный формат. Попробуйте еще раз</span>
                                </label>

                                <label className="label-input">
                                    <span>Дата рождения</span>
                                    <input placeholder="13.07.2012" type="date"/>
                                    <span className="error">Неверный формат.</span>
                                </label>
                            </div>

                            <div className="block-line"/>

                            <label className="label-select">
                                <span> Категория заболевания</span>
                                <select>
                                    {
                                        this.state.all_categories.map((item, index) => {
                                            return <option key={item._id} value={item._id}>{item.title}</option>
                                        })
                                    }
                                </select>
                            </label>

                            <label className="label-input label-textarea">
                                <span>Опишите свою ситуацию</span>
                                <textarea placeholder="Опишите свою ситуацию"/>
                            </label>

                            <div className="block-line"/>

                            <div className="document-block">
                                <h3>
                                    Загрузите необходимые документы
                                </h3>

                                <h5>
                                    Загруженные документы необходимы для подтверждения указанной информации нашими
                                    модераторами.
                                    Ваши данные не будут доступны другим пользователям.
                                </h5>

                                <h6>
                                    Фото / скан Вашего паспорта
                                </h6>
                                <label className="label-file">
                                    <span className="btn btn-transparent">ВЫБРАТЬ</span>
                                    <input type="file"/>
                                </label>

                                <div id="another-recipient-foto">
                                    <h6>Фото / скан паспорта реципиента (больного)</h6>

                                    <label className="label-file">
                                        <span className="btn btn-transparent">ВЫБРАТЬ</span>
                                        <input type="file"/>
                                    </label>
                                </div>


                                <h6>Фото / скан больничных документов (выписки, заключения врачей)</h6>

                                <label className="label-file">
                                    <span className="btn btn-transparent">ВЫБРАТЬ</span>
                                    <input type="file"/>
                                </label>
                            </div>

                            <label className="label-checkbox">

                                <input type="checkbox"/>
                                <span>
                        <span>
                              Я соглашаюсь с <Link to="/confidentiality"
                                                   target="_blank"> Политикой конфиденциальности</Link> и <Link
                            to="/rules" target="_blank">Правилами пользования сайтом</Link>
                        </span>
                    </span>
                            </label>

                            <div className="button-wrapper">
                                <button type="submit" className="btn">
                                    Отправить
                                </button>
                            </div>

                        </form>
                    </div>
                </main>

            </div>

        )
    }
};


export default createFundraiser;