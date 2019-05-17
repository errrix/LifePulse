import React from "react";

import AdminMenu from '../../components/adminMenu'
import AdminHeader from '../../components/adminHeader'
import CardStatusPopup from "./cardStatus/components/popup";
import ReactQuill from 'react-quill';
import url from "../../modules/url"

import CSSTransitionGroup from "react-addons-css-transition-group"

class viewCampaign extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            card: {},
            showPopup: false,
            title: '',
            mail_text:'',
            to_status: '',
            edited: false,
            allCategories: [],
            popupStatus: false
        };

        this.getthisCard = this.getthisCard.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
        this.openPopup = this.openPopup.bind(this);
        this.HandlerEdit = this.HandlerEdit.bind(this);
        this.HandleSaveEdit = this.HandleSaveEdit.bind(this);
        this.HandlerChange = this.HandlerChange.bind(this);
        this.getCategories = this.getCategories.bind(this);
        this.StateValueQuill = this.StateValueQuill.bind(this);
        this.handleStatusPopup = this.handleStatusPopup.bind(this);
    }

    getthisCard() {
        let id = this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf('/') + 1);
        fetch(`${url}/api/card/admin/${id}`, {
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
            this.setState({card: json.response});
            this.setState({text_preview: json.response.text_preview});
            this.setState({category: json.response.category[0]._id});
            this.setState({main_text: json.response.main_text});
            console.log(this.state.card.complaints)
        })
    }

    getCategories() {
        fetch(`${url}/api/category`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            this.setState({allCategories: json.response});
            console.log(this.state.allCategories);
        })
    }

    HandlerChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
        console.log(this.state.name)
    }

    HandleSaveEdit(e) {
        e.preventDefault();
        console.log(this.state.card._id);
        fetch(`${url}/api/card/${this.state.card._id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "PUT",
            credentials: 'include',
            body: JSON.stringify({
                "text_preview": this.state.text_preview,
                "category": this.state.category,
                "main_text": this.state.main_text
            })
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json);
            window.location.reload();
            this.setState({
                edited: false
            })
        })
    }

    HandlerEdit() {
        this.setState({
            edited: true
        })
    }

    componentDidMount() {

        this.getthisCard();
        this.getCategories();
    }

    handleClosePopup(value) {
        this.setState({
            showPopup: value
        });
    }

    handleStatusPopup() {
        this.props.history.goBack();
    }

    openPopup(e) {
        this.setState({
            showPopup: true,
            title: e.target.getAttribute("data-title"),
            to_status: e.target.getAttribute("data-action"),
            mail_text: e.target.getAttribute("data-text")
        });
    }

    StateValueQuill(value) {
        this.setState({main_text: value});
    }

    render() {
        let modules = {
            toolbar: {
                container: [
                    [{'header': [3, 4, false]}],
                    ['bold', 'italic', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}],
                    [{'align': []}],
                    ['image']],
                handlers: {
                    'image': this.imageHandler
                }
            }
        };
        return (
            <div>
                <CSSTransitionGroup transitionName="logn-popup"
                                    transitionEnter={true}
                                    transitionEnterTimeout={300}
                                    transitionLeave={true}
                                    transitionLeaveTimeout={300}>
                    {this.state.showPopup ? <CardStatusPopup title={this.state.title}
                                                             action={this.state.to_status}
                                                             updateStatusPopup={this.handleClosePopup}
                                                             text={this.state.mail_text}
                                                             id={this.state.card._id}
                                                             handleStatusPopup={this.handleStatusPopup}
                                                             email={this.state.card.user[0].email}
                    /> : false}

                </CSSTransitionGroup>

                <main className="account-admin-block">
                    <div className="account-admin-block-wrapper">
                        <AdminMenu/>

                        <div className="account-admin-content-block account-admin-campaign">

                            <header>
                                <h1>
                                    Просмотреть публикацию
                                </h1>
                            </header>
                            <div className="account-admin-campaign-wrapper">
                                <form action="" className="main-form new-campaign-form view-campaign">
                                    <label className="label-input">
                                        <span>Цель сбора средств:</span>
                                        <textarea name="text_preview" disabled={!this.state.edited}
                                                  value={this.state.text_preview} onChange={this.HandlerChange}/>
                                    </label>

                                    <div className="text-block">
                                        <div>
                                            <span>Сумма сбора: </span>
                                            <span>{this.state.card.sum}</span>
                                        </div>
                                        <div>
                                            <span>Дата создания сбора: </span>
                                            <span>{new Date(Date.parse(this.state.card.createdAt)).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <div className="text-wrapper">
                                        <div className="text-block">
                                            <div className="text-item">
                                                <span>Пользователь: </span>
                                                <span>{this.state.card.full_name}</span>
                                            </div>
                                            <div className="text-item">
                                                <span>Название банка: </span>
                                                <span>{this.state.card.bank}</span>
                                            </div>
                                            <div className="text-item">
                                                <span>Номер счета: </span>
                                                <span>{this.state.card.account_number}</span>
                                            </div>
                                            <div className="text-item">
                                                <span>МФО: </span>
                                                <span>{this.state.card.mfo}</span>
                                            </div>
                                            <div className="text-item">
                                                <span>ИНН: </span>
                                                <span>{this.state.card.inn}</span>
                                            </div>
                                            <div className="text-item">
                                                <span>email: </span>
                                                {this.state.card.user ?
                                                    (<span>{this.state.card.user[0].email}</span>) : false
                                                }
                                            </div>
                                        </div>

                                        <div className="text-block">
                                            <div className="text-item">
                                                <span>Пациент: </span>
                                                <span>{this.state.card.for_whom_name}</span>
                                            </div>
                                            <div className="text-item">
                                                <span>Дата рождения: </span>
                                                <span>{new Date(Date.parse(this.state.card.birthday)).toLocaleDateString()}</span>
                                            </div>

                                            <div className="text-item">
                                                <span>Населенный пункт: </span>
                                                <span>{this.state.card.city}</span>
                                            </div>
                                            <div className="text-item">
                                                <span>Адрес: </span>
                                                <span>{this.state.card.address}</span>
                                            </div>
                                            <div className="text-item">
                                                <span>Номер телефона: </span>
                                                <span>{this.state.card.phone}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <label className="label-select">
                                        <span> Категория заболевания</span>
                                        {this.state.allCategories.length > 0 ?
                                            (<select disabled={!this.state.edited} name="category"
                                                     onChange={this.HandlerChange} value={this.state.category}>
                                                {this.state.allCategories.map((item) => {
                                                    return <option key={item._id} value={item._id}>
                                                        {item.title}
                                                    </option>
                                                })}
                                            </select>) : false
                                        }
                                    </label>

                                    <div className="main-foto">
                                        <h3>
                                            Фото обложки
                                        </h3>

                                        {this.state.card.photo_preview ? (
                                            <a href={`${url}/uploads/${this.state.card.photo_preview.filename}`}
                                               target="_blank">
                                                <img
                                                    src={`${url}/uploads/${this.state.card.photo_preview.filename}`}
                                                    alt={this.state.card.for_whom_name}/>
                                            </a>

                                        ) : false}
                                    </div>

                                    <div className="label-input label-textarea">
                                        <span className="h4Header">Основной текст заявки</span>
                                        {this.state.edited ? (
                                            <ReactQuill name="main_text"
                                                        id="main_text"
                                                        defaultValue={this.state.card.main_text}
                                                        value={this.state.main_text}
                                                        onChange={this.StateValueQuill}
                                                        modules={modules}
                                            />
                                        ) : (
                                            <div className="customUserBlock"
                                                 onChange={this.HandlerChange}
                                                 dangerouslySetInnerHTML={{__html: this.state.card.main_text}}
                                            />
                                        )}

                                    </div>

                                    <div className="link-block">
                                        <h3>
                                            Документы:
                                        </h3>

                                        <div className="link-block-wrapper">
                                            {this.state.card.photo_passports ? (
                                                <a href={`${url}/uploads/${this.state.card.photo_passports.filename}`}
                                                   target="_blank">
                                                    <span>Img паспорта автора заявки:</span>

                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.85 488.85"
                                                         width="512"
                                                         height="512">
                                                        <path
                                                            d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"
                                                            data-original="#000000" className="active-path"
                                                            data-old_color="#000000"
                                                            fill="#363636"/>
                                                    </svg>
                                                </a>

                                            ) : false}

                                            {this.state.card.photo_passports_sick ? (
                                                <a href={`${url}/uploads/${this.state.card.photo_passports_sick.filename}`}
                                                   target="_blank">
                                                    <span>Img паспорта реципиента (больного):</span>

                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.85 488.85"
                                                         width="512"
                                                         height="512">
                                                        <path
                                                            d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"
                                                            data-original="#000000" className="active-path"
                                                            data-old_color="#000000"
                                                            fill="#363636"/>
                                                    </svg>
                                                </a>

                                            ) : false}

                                            {this.state.card.photo_documents ? (
                                                this.state.card.photo_documents.map((item) => {
                                                    return <a
                                                        href={`${url}/uploads/${item.filename}`}
                                                        target="_blank" key={item._id}>
                                                        <span>Img больничных документов:</span>

                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             viewBox="0 0 488.85 488.85"
                                                             width="512"
                                                             height="512">
                                                            <path
                                                                d="M244.425 98.725c-93.4 0-178.1 51.1-240.6 134.1-5.1 6.8-5.1 16.3 0 23.1 62.5 83.1 147.2 134.2 240.6 134.2s178.1-51.1 240.6-134.1c5.1-6.8 5.1-16.3 0-23.1-62.5-83.1-147.2-134.2-240.6-134.2zm6.7 248.3c-62 3.9-113.2-47.2-109.3-109.3 3.2-51.2 44.7-92.7 95.9-95.9 62-3.9 113.2 47.2 109.3 109.3-3.3 51.1-44.8 92.6-95.9 95.9zm-3.1-47.4c-33.4 2.1-61-25.4-58.8-58.8 1.7-27.6 24.1-49.9 51.7-51.7 33.4-2.1 61 25.4 58.8 58.8-1.8 27.7-24.2 50-51.7 51.7z"
                                                                data-original="#000000" className="active-path"
                                                                data-old_color="#000000"
                                                                fill="#363636"/>
                                                        </svg>
                                                    </a>
                                                })
                                            ) : false}
                                        </div>

                                    </div>

                                    <div className="button-wrapper hide">
                                        <button type="submit" className="btn">Сохранить</button>
                                    </div>

                                </form>

                                <div className="view-compaign-complaints">
                                    <table className="account-admin-table m--big-table">
                                        <tbody>
                                        <tr className="title">
                                            <th>От кого</th>
                                            <th>Текст жалобы</th>
                                            <th>Дата</th>
                                        </tr>
                                        {this.state.card.complaints ? (this.state.card.complaints.map((item) => {
                                            return <tr key={item._id}>
                                                <td>
                                                    {item.user.email}
                                                </td>
                                                <td>
                                                    {item.text}
                                                </td>
                                                <td>
                                                    {item.date}
                                                </td>
                                            </tr>
                                        })) : false}
                                        </tbody>
                                    </table>


                                </div>

                                {this.state.card.status === "draft" && !this.state.edited ? (
                                    <div className="button-block">
                                        <button className="btn btn-transparent campaign-back"
                                                data-title="Заявка отправлена на доработку"
                                                data-text={`Ваша заявка не прошла модерацию. Отредактируйте информацию Вашей заявки в личном кабинете.`}
                                                data-action="rev"
                                                onClick={this.openPopup}>
                                            На доработку
                                        </button>
                                        <button className="btn campaign-publish"
                                                data-title="Заявка опубликована"
                                                data-text={`Ваша заявка прошла модерацию и опубликована сервисе.`}
                                                data-action="active"
                                                onClick={this.openPopup}>
                                            Опубликовать
                                        </button>
                                        <button className="btn btn-transparent campaign-delete"
                                                data-title="Заявка удалена"
                                                data-text={`Ваша заявка не прошла модерацию и и была удалена.`}
                                                data-action="delete"
                                                onClick={this.openPopup}>
                                            Удалить
                                        </button>
                                        <button className="btn btn-transparent campaign-edit"
                                                onClick={this.HandlerEdit}>
                                            Редактировать
                                        </button>
                                    </div>
                                ) : false}

                                {this.state.edited ? (
                                    <div className="button-block">
                                        <button className="btn btn-transparent campaign-edit"
                                                onClick={this.HandleSaveEdit}>
                                            Сохранить
                                        </button>
                                    </div>
                                ) : false}

                                {this.state.card.status === "active" ? (
                                    <div className="button-block">
                                        <button className="btn btn-transparent campaign-freeze"
                                                data-title="Заявка приостанавливается для проверки"
                                                data-text={`Ваша заявка временно приостановлена, в связи с поступившими жалобами. С Вами свяжется техническая поддержка.`}
                                                data-action="ban"
                                                onClick={this.openPopup}>
                                            Приостановить
                                        </button>
                                    </div>
                                ) : false}

                                {this.state.card.status === "verify" ? (
                                    <div className="button-block">
                                        <button className="btn btn-transparent campaign-freeze"
                                                data-title="Заявка приостанавливается для проверки"
                                                data-text={`Ваша заявка временно приостановлена, в связи с поступившими жалобами. С Вами свяжется техническая поддержка.`}
                                                data-action="ban"
                                                onClick={this.openPopup}>
                                            Приостановить
                                        </button>
                                    </div>
                                ) : false}

                                {this.state.card.status === "complite" ? (
                                    <div className="button-block">
                                        <button className="btn campaign-freeze"
                                                data-title="Деньги по заявке выплачены"
                                                data-action="archive"
                                                data-text={`На Ваш банковский счет была переведена собранная сумма.`}
                                                onClick={this.openPopup}>
                                            Выплачено. Перевод в завершенные
                                        </button>
                                    </div>
                                ) : false}

                                {this.state.card.status === "ban" && !this.state.edited ? (
                                    <div className="button-block">
                                        <button className="btn btn-transparent campaign-verify"
                                                data-title="Проверка успешно пройдена"
                                                data-text={`Ваша заявка прошла повторную модерацию и опубликована сервисе.`}
                                                data-action="verify"
                                                onClick={this.openPopup}>
                                            Проверено
                                        </button>
                                        <button className="btn btn-transparent campaign-delete"
                                                data-title="Проверка не пройдена"
                                                data-text={`Ваша заявка временно приостановлена, в связи с поступившими жалобами. С Вами свяжется техническая поддержка.`}
                                                data-action="ban"
                                                onClick={this.openPopup}>
                                            Мошенничество
                                        </button>
                                        <button className="btn btn-transparent campaign-edit"
                                                onClick={this.HandlerEdit}>
                                            Редактировать
                                        </button>
                                    </div>
                                ) : false}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
};


export default viewCampaign;