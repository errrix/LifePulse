import React from "react";
import {Link, Redirect} from "react-router-dom";
import ReactQuill from 'react-quill';

import validator from './components/validator'
import {connect} from "react-redux";
import FileLoader from "./components/file_loader";

class CreateFundraiser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            redirect_msg: '',
            all_categories: [],
            to_whom: 'self',
            checkbox: false,

            status: "draft",
            text_preview: '',
            sum: '',
            full_name: '',
            account_number: '',
            bank: '',
            mfo: '',
            inn: '',
            phone: '',
            for_whom_name: '',
            city: '',
            address: '',
            birthday: '',
            category: '',
            main_text: '',
            photo_passports: '',
            photo_passports_sick: null,
            photo_preview: '',
            photo_documents: [],
        };

        this.StateValue = this.StateValue.bind(this);
        this.LoadImage = this.LoadImage.bind(this);
        this.NewFundraiser = this.NewFundraiser.bind(this);
        this.StateValueQuill = this.StateValueQuill.bind(this);
        this.imageHandler = this.imageHandler.bind(this);
        this.getEditedCard = this.getEditedCard.bind(this);
        this.deleteImage = this.deleteImage.bind(this);
        this.UpdateFundraiser = this.UpdateFundraiser.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.toggleLength = this.toggleLength.bind(this);
    }

    handleCheckbox() {
        this.setState({
            checkbox : !this.state.checkbox
        })
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
            this.setState({category: json.response[0]._id});
        })
    }

    getEditedCard(id) {
        fetch(`http://165.227.11.173:3001/api/card/admin/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json);
            this.setState({
                card: json.response
            });
            this.setState({
                status: this.state.card.status,
                text_preview: this.state.card.text_preview,
                sum: this.state.card.sum,
                full_name: this.state.card.full_name,
                account_number: this.state.card.account_number,
                bank: this.state.card.bank,
                mfo: this.state.card.mfo,
                inn: this.state.card.inn,
                phone: this.state.card.phone,
                for_whom_name: this.state.card.for_whom_name,
                city: this.state.card.city,
                address: this.state.card.address,
                birthday: this.state.card.birthday,
                category: this.state.card.category[0]._id,
                main_text: this.state.card.main_text,
                photo_passports: this.state.card.photo_passports,
                photo_passports_sick: this.state.card.photo_passports_sick,
                photo_preview: this.state.card.photo_preview,
                photo_documents: this.state.card.photo_documents,
                to_whom: this.state.card.full_name === this.state.card.for_whom_name ? "self" : "notself"
            })

            // console.log(new Date(this.state.birthday).toISOString());
        })
    }

    NewFundraiser(e) {
        e.preventDefault();
        if (validator.allValidFunc()) {
            document.querySelector('.error-validator').classList.add('hide');
            fetch('http://165.227.11.173:3001/api/card', {
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                method: 'POST',
                body: JSON.stringify({
                    "user": this.props.user_id,
                    "status": "draft",
                    "text_preview": this.state.text_preview,
                    "sum": this.state.sum,
                    "full_name": this.state.full_name,
                    "account_number": this.state.account_number,
                    "bank": this.state.bank,
                    "mfo": this.state.mfo,
                    "inn": this.state.inn,
                    "phone": this.state.phone,
                    "city": this.state.city,
                    "address": this.state.address,
                    "birthday": this.state.birthday,
                    "category": this.state.category,
                    "main_text": this.state.main_text,
                    "photo_passports": this.state.photo_passports,
                    "photo_passports_sick": this.state.photo_passports_sick,
                    "photo_preview": this.state.photo_preview,
                    "photo_documents": this.state.photo_documents,
                    "for_whom_name": this.state.to_whom === "self" ? this.state.full_name : this.state.for_whom_name
                })
            })
                .then(function (response) {
                    return response.json()
                }).then((json) => {
                console.log(json);
                if(json.success ) {
                    this.setState({
                        redirect_msg: 'создание',
                        redirect: true
                    });
                }
            })
        } else {
            document.querySelector('.error-validator').classList.remove('hide');
        }

    }

    UpdateFundraiser(e) {
        e.preventDefault();
        if (validator.allValidFunc()) {
            fetch(`http://165.227.11.173:3001/api/card/${this.state.card._id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                method: 'PUT',
                body: JSON.stringify({
                    "user": this.props.user_id,
                    "status": "draft",
                    "text_preview": this.state.text_preview,
                    "sum": this.state.sum,
                    "full_name": this.state.full_name,
                    "account_number": this.state.account_number,
                    "bank": this.state.bank,
                    "mfo": this.state.mfo,
                    "inn": this.state.inn,
                    "phone": this.state.phone,
                    "city": this.state.city,
                    "address": this.state.address,
                    "birthday": this.state.birthday,
                    "category": this.state.category,
                    "main_text": this.state.main_text,
                    "photo_passports": this.state.photo_passports,
                    "photo_passports_sick": this.state.photo_passports_sick,
                    "photo_preview": this.state.photo_preview._id,
                    "photo_documents": this.state.photo_documents,
                    "for_whom_name": this.state.to_whom === "self" ? this.state.full_name : this.state.for_whom_name
                })
            })
                .then(function (response) {
                    return response.json()
                }).then((json) => {
                console.log(json);
                if(json.success ) {
                    this.setState({
                        redirect_msg: 'редактирование',
                        redirect: true
                    });
                }

            })
        } else {
            document.querySelector('.error-validator').classList.remove('hide');
        }

    }

    LoadImage(e) {
        console.log(e.target);
        const {name} = e.target;
        let data = new FormData();
        data.append("image", e.target.files[0]);
        fetch('http://165.227.11.173:3001/api/images/', {
            method: 'POST',
            credentials: 'include',
            body: data
        })
            .then(function (response) {
                return response.json()
            }).then((data) => {
            console.log(data);
            if(name === "photo_documents") {
                console.log('fsddas');
                let obj = {
                    _id: data.response._id,
                    filename: data.response.filename
                };
                this.setState({
                    photo_documents: [...this.state.photo_documents, obj]
                });
            } else {
                this.setState({
                    [name]: {
                        _id: data.response._id,
                        filename: data.response.filename
                    }
                });
            }

        })
    }

    deleteImage(e) {
        e.preventDefault();
        const {name} = e.target;
        let delete_id;
        if(name === "photo_documents") {
          delete_id = this.state[name][0]._id;
        } else {
            delete_id = this.state[name]._id;
        }
        e.preventDefault();
        fetch(`http://165.227.11.173:3001/api/images/${delete_id}`, {
            method: 'delete',
            credentials: 'include',
        })
            .then(function (response) {
                return response.json()
            }).then((data) => {
            console.log(data);
            if(name === "photo_documents") {
                this.setState({[name]: []});
            } else {
                this.setState({[name]: null});
            }
        });


    }

    componentDidMount() {
        this.getCategories();
        if (this.props.location.state) {
            this.getEditedCard(this.props.location.state.id);
            document.title = "LifesPulse | Редактирование"
        } else {
            document.title = "LifesPulse | Новая публикация"
        }

    }

    StateValue(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    StateValueQuill(value) {
        this.setState({main_text: value});
    }

    imageHandler(image, callback) {
        let range = this.quillRef.getEditor().getSelection();
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();
        input.onchange = function () {
            const file = input.files[0];
            let data = new FormData();
            data.append("image", file);
            fetch('http://165.227.11.173:3001/api/images/', {
                method: 'POST',
                credentials: 'include',
                body: data
            })
                .then(function (response) {
                    return response.json()
                }).then((data) => {
                let url = data.response.sizes[0].path;
                this.quillRef.getEditor().insertEmbed(range.index, 'image', `http://165.227.11.173:3001/${url}`, "user");
            })
        }.bind(this);
    }

    toggleLength() {
        if (this.state.text_preview.length > 80) {
            document.getElementById("text-preview-length").classList.remove('color-red')
            document.getElementById("text-preview-length").classList.add('color-green')
        } else {
            document.getElementById("text-preview-length").classList.remove('color-green')
            document.getElementById("text-preview-length").classList.add('color-red')
        }
    }

    render() {
        let modules = {
            toolbar: {
                container: [
                    [{'header': [3, 4, false]}],
                    ['bold', 'italic', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}],
                    [{ 'align': [] }],
                    ['image']],
                handlers: {
                    'image': this.imageHandler
                }
            }
        };
        return (
            <div>
                {
                    this.state.redirect ? (
                        <Redirect to={{
                            pathname: '/thanks-create',
                            state: {action: this.state.redirect_msg}
                        }}/>
                    ) : (
                        <main className="new-campaign-block">
                            <div className="container">
                                <h1 className="h2Header">Новая публикация</h1>

                                <form action="" className="main-form new-campaign-form">

                                    <div className="header-block">
                                        <label className="label-input">
                                            <span>Укажите цель сбора средств: <span id="text-preview-length">{this.state.text_preview.length}</span></span>
                                            <textarea maxLength="130"
                                                      minLength="80"
                                                      name="text_preview"
                                                      id="text_preview"
                                                      onChange={this.StateValue}
                                                      onBlur={validator.textPreview}
                                                      value={this.state.text_preview}
                                                      onKeyDown={this.toggleLength}
                                                      placeholder="Острое нарушение мозгового кровообращения по ишемическому типу
                                              в басейне левой внутренней сонной артерии внутренней сонной артерии"/>
                                            <span className="info">Вы можете ввести не меньше 80 и не больше 130 знаков, включая пробелы</span>
                                        </label>

                                        <label className="label-input label-number">
                                            <span>Укажите сумму сбора</span>
                                            <span className="currency">ГРН</span>
                                            <input placeholder="100 000"
                                                   type="number"
                                                   name="sum"
                                                   id="sum"
                                                   onChange={this.StateValue}
                                                   onBlur={validator.sum}
                                                   value={this.state.sum}/>
                                            <span className="error">Неверный формат. Попробуйте еще раз</span>
                                        </label>
                                    </div>

                                    <div className="block-line"/>

                                    <label className="label-input">
                                        <span>Ваше ФИО</span>
                                        <input placeholder="Василий Васильев Васильевич"
                                               type="text"
                                               name="full_name"
                                               id="full_name"
                                               onChange={this.StateValue}
                                               onBlur={validator.fullName}
                                               value={this.state.full_name}/>
                                        <span className="error">Неверный формат. Попробуйте еще раз</span>
                                    </label>

                                    <div className="bank-details">
                                        <label className="label-input">
                                            <span>Номер счета</span>
                                            <input placeholder="Номер счета в Украинском банке"
                                                   type="number"
                                                   name="account_number"
                                                   id="account_number"
                                                   onChange={this.StateValue}
                                                   onBlur={validator.accountNumber}
                                                   value={this.state.account_number}/>
                                            <span className="error">Неверный формат. Попробуйте еще раз</span>
                                        </label>
                                        <label className="label-input">
                                            <span>Полное название банка</span>
                                            <input placeholder="АО КБ «ПРИВАТБАНК»"
                                                   type="text"
                                                   name="bank"
                                                   id="bank"
                                                   onChange={this.StateValue}
                                                   onBlur={validator.bank}
                                                   value={this.state.bank}/>
                                            <span className="error">Неверный формат. Попробуйте еще раз</span>
                                        </label>
                                        <label className="label-input">
                                            <span>МФО банка</span>
                                            <input placeholder="305299"
                                                   type="number"
                                                   name="mfo"
                                                   id="mfo"
                                                   onChange={this.StateValue}
                                                   onBlur={validator.mfo}
                                                   value={this.state.mfo}/>
                                            <span className="error">Неверный формат.</span>
                                        </label>
                                    </div>

                                    <div className="phone-inn">
                                        <label className="label-input">
                                            <span>Ваш номер телефона</span>
                                            <input type="tel"
                                                   placeholder="096 33 33 333"
                                                   name="phone"
                                                   id="phone"
                                                   onChange={this.StateValue}
                                                   onBlur={validator.phone}
                                                   value={this.state.phone}/>
                                            <span className="error">Неверный формат. Попробуйте еще раз</span>
                                        </label>

                                        <label className="label-input">
                                            <span>Идентификационный код</span>
                                            <input placeholder="1234567890"
                                                   type="number"
                                                   name="inn"
                                                   id="inn"
                                                   onChange={this.StateValue}
                                                   onBlur={validator.inn}
                                                   value={this.state.inn}/>
                                            <span className="error">Неверный формат. Попробуйте еще раз</span>
                                        </label>
                                    </div>

                                    <div className="block-line"/>

                                    <div className="to-whom-campaign">
                                        <div className="radio-wrapper">
                                            <label className="label-radio">
                                                <input type="radio" name="to_whom"
                                                       checked={this.state.to_whom === "self"}
                                                       value="self" onChange={this.StateValue}/>
                                                <span>Я собираю деньги для себя</span>
                                            </label>

                                            <label className="label-radio">
                                                <input type="radio" name="to_whom" value="notself"
                                                       checked={this.state.to_whom === "notself"}
                                                       onChange={this.StateValue}/>
                                                <span>Я собираю деньги не для себя</span>
                                            </label>
                                        </div>
                                        {this.state.to_whom === 'self' ? validator.validValue.for_whom_name_valid = true : (
                                            <label className="label-input" id="another-recipient">
                                                {validator.validValue.for_whom_name_valid = false}
                                                <span>Для кого собираются средства?</span>
                                                <input placeholder="Василий Васильев Васильевич"
                                                       type="text"
                                                       name="for_whom_name"
                                                       id="for_whom_name"
                                                       onChange={this.StateValue}
                                                       onBlur={validator.forWhomName}
                                                       value={this.state.for_whom_name}/>
                                                <span className="error">Неверный формат. Попробуйте еще раз</span>
                                            </label>
                                        )}
                                    </div>

                                    <div className="address-birth">
                                        <label className="label-input">
                                            <span>Населенный пункт</span>
                                            <input placeholder="c. Григорьевка"
                                                   type="text"
                                                   name="city"
                                                   id="city"
                                                   onChange={this.StateValue}
                                                   onBlur={validator.city}
                                                   value={this.state.city}/>
                                            <span className="error">Неверный формат. Попробуйте еще раз</span>
                                        </label>

                                        <label className="label-input">
                                            <span>Адрес</span>
                                            <input placeholder="ул. Бунина, 17, кв. 12"
                                                   type="text"
                                                   name="address"
                                                   id="address"
                                                   onChange={this.StateValue}
                                                   onBlur={validator.address}
                                                   value={this.state.address}/>
                                            <span className="error">Неверный формат. Попробуйте еще раз</span>
                                        </label>

                                        <label className="label-input">
                                            <span>Дата рождения</span>
                                            <input type="date"
                                                   name="birthday"
                                                   id="birthday"
                                                   onChange={this.StateValue}
                                                   onBlur={validator.birthday}
                                                   value={this.state.birthday !== ""
                                                       ? new Date(this.state.birthday).toISOString().substring(0, 10)
                                                       : new Date().toISOString().substring(0, 10)}
                                            />
                                            <span className="error">Неверный формат.</span>
                                        </label>
                                    </div>

                                    <div className="block-line"/>

                                    <label className="label-select">
                                        <span> Категория заболевания</span>
                                        <select name="category"
                                                onChange={this.StateValue}
                                                value={this.state.category}>
                                            {this.state.all_categories.map((item, index) => {
                                                return <option key={item._id} value={item._id}>{item.title}</option>
                                            })
                                            }
                                        </select>
                                    </label>

                                    <div className="photo-preview-block">
                                        <h6 className="h4Header">Фото-обложка компании по сбору средств</h6>
                                        <FileLoader
                                            item={this.state.photo_preview}
                                            name="photo_preview"
                                            deleteImage={this.deleteImage}
                                            LoadImage={this.LoadImage}
                                        />
                                    </div>


                                    <div className="quill-textarea">
                                        <h6 className="h4Header">Опишите свою ситуацию</h6>
                                        <ReactQuill name="main_text"
                                                    id="main_text"
                                                    value={this.state.main_text}
                                                    onChange={this.StateValueQuill}
                                                    modules={modules}
                                                    ref={(el) => this.quillRef = el}
                                        />

                                    </div>

                                    <div className="block-line"/>

                                    <div className="document-block">
                                        <h3>
                                            Загрузите необходимые документы
                                        </h3>

                                        <h5>
                                            Загруженные документы необходимы для подтверждения указанной информации
                                            нашими
                                            модераторами.
                                            Ваши данные не будут доступны другим пользователям.
                                        </h5>


                                        <h6 className="h4Header">
                                            Фото / скан Вашего паспорта
                                        </h6>
                                        <FileLoader
                                            item={this.state.photo_passports}
                                            name="photo_passports"
                                            deleteImage={this.deleteImage}
                                            LoadImage={this.LoadImage}
                                        />
                                        {this.state.to_whom === 'self' ? false : (
                                            <div id="another-recipient-foto">
                                                <h6 className="h4Header">Фото / скан паспорта реципиента (больного)</h6>

                                                <FileLoader
                                                    name="photo_passports_sick"
                                                    item={this.state.photo_passports_sick}
                                                    deleteImage={this.deleteImage}
                                                    LoadImage={this.LoadImage}
                                                />

                                            </div>
                                        )}

                                        <h6 className="h4Header">Фото / скан больничных документов (выписки, заключения
                                            врачей)</h6>
                                        {
                                            this.state.photo_documents.length > 0 ? (
                                                this.state.photo_documents.map((item) => {
                                                    return <FileLoader
                                                        key={item._id}
                                                        item={item}
                                                        name="photo_documents"
                                                        deleteImage={this.deleteImage}
                                                        LoadImage={this.LoadImage}
                                                    />
                                                })

                                            ) : (
                                                <FileLoader
                                                    item={this.state.photo_documents[0]}
                                                    name="photo_documents"
                                                    deleteImage={this.deleteImage}
                                                    LoadImage={this.LoadImage}
                                                />
                                            )
                                        }


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
                                    {this.state.status === 'draft' ? (
                                        <div className="button-wrapper">
                                            <button type="submit" className="btn m--with-loader"
                                                    onClick={this.NewFundraiser}>
                                                Опубликовать
                                                <span className="loader"/>

                                            </button>
                                            <span
                                                className="error-validator hide">Все поля обязательны к заполнению
                                            </span>
                                        </div>
                                    ) : false}

                                    {this.state.status === 'rev' ? (
                                        <div className="button-wrapper">
                                            <button type="submit" className="btn m--with-loader"
                                                    onClick={this.UpdateFundraiser}>
                                                Закончить редактирование
                                                <span className="loader"/>

                                            </button>
                                            <span
                                                className="error-validator hide">Все поля обязательны к заполнению
                                            </span>
                                        </div>
                                    ) : false}


                                </form>
                            </div>
                        </main>
                    )
                }


            </div>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        data: store,
        user_id: store.user_id
    }
};


export default connect(mapStateToProps)(CreateFundraiser);