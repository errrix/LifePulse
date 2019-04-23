import React from "react";

import AdminMenu from '../../components/adminMenu'
import AdminHeader from '../../components/adminHeader'
import CardStatusPopup from "./cardStatus/components/popup";

import CSSTransitionGroup from "react-addons-css-transition-group"

class viewCampaign extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            card: {},
            showPopup: false,
            title: '',
            to_status: ''
        };

        this.getthisCard = this.getthisCard.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
        this.openPopup = this.openPopup.bind(this);
    }

    getthisCard() {
        let id = this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf('/') + 1);
        fetch(`http://165.227.11.173:3001/api/card/${id}`, {
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
            console.log(this.state.card)
        })
    }

    componentDidMount() {
        this.getthisCard();
    }

    handleClosePopup(value) {
        this.setState({
            showPopup: value
        });
    }

    openPopup(e) {
        this.setState({
            showPopup: true,
            title: e.target.getAttribute("data-title"),
            to_status: e.target.getAttribute("data-action")
        });
    }

    render() {
        return (
            <div>
                <AdminHeader/>
                <CSSTransitionGroup transitionName="logn-popup"
                                    transitionEnter={true}
                                    transitionEnterTimeout={300}
                                    transitionLeave={true}
                                    transitionLeaveTimeout={300}>
                    {this.state.showPopup ?  <CardStatusPopup title={this.state.title}
                                                              action={this.state.to_status}
                                                              updateStatusPopup={this.handleClosePopup}
                                                              id={this.state.card._id}/> : false}

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
                                        <textarea disabled="disabled" value={this.state.card.text_preview}/>
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
                                                <span>!!!!!!!!!!!!!!!!!!!!!!!!!! FIX_ME</span>
                                            </div>
                                        </div>

                                        <div className="text-block">
                                            <div className="text-item">
                                                <span>Пациент: </span>
                                                <span>!!!!!!!!!!!!!!!!!!!!!!!!! FIX_ME</span>
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
                                        <select disabled="disabled" value={this.state.card.category}/>
                                    </label>

                                    <div className="main-foto">
                                        <h3>
                                            Фото обложки
                                        </h3>

                                        {this.state.card.photo_preview ? (
                                            <a href={`http://165.227.11.173:3001/${this.state.card.photo_preview.sizes[0].path}`}
                                               target="_blank">
                                                <img
                                                    src={`http://165.227.11.173:3001/${this.state.card.photo_preview.sizes[0].path}`}
                                                    alt=""/>
                                            </a>

                                        ) : false}
                                    </div>

                                    <label className="label-input label-textarea">
                                        <span>Основной текст заявки</span>
                                        <textarea disabled="disabled" value={this.state.card.main_text}/>
                                    </label>

                                    <div className="link-block">
                                        <h3>
                                            Документы:
                                        </h3>

                                        <div className="link-block-wrapper">
                                            {this.state.card.photo_passports ? (
                                                <a href={`http://165.227.11.173:3001/${this.state.card.photo_passports.sizes[0].path}`}
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
                                                <a href={`http://165.227.11.173:3001/${this.state.card.photo_passports_sick.sizes[0].path}`}
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
                                                    return <a href={`http://165.227.11.173:3001/${item.sizes[0].path}`}
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

                                {this.state.card.status === "draft" ? (
                                    <div className="button-block">
                                        <button className="btn btn-transparent campaign-back" data-title="Отправить на доработку" data-action="rev" onClick={this.openPopup}>
                                            На доработку
                                        </button>
                                        <button className="btn campaign-publish"  data-title="Опубликовать" data-action="active" onClick={this.openPopup}>
                                            Опубликовать
                                        </button>
                                        <button className="btn btn-transparent campaign-delete" data-title="Удалить" data-action="delete" onClick={this.openPopup}>
                                            Удалить
                                        </button>
                                        <button className="btn btn-transparent campaign-edit">
                                            Редактировать
                                        </button>
                                    </div>
                                ) : false}

                                {this.state.card.status === "active" ? (
                                    <div className="button-block">
                                        <button className="btn btn-transparent campaign-freeze" data-title="Приостановить для проверки" data-action="ban" onClick={this.openPopup}>
                                            Приостановить
                                        </button>
                                    </div>
                                ) : false}

                                {this.state.card.status === "ban" ? (
                                    <div className="button-block">
                                        <button className="btn btn-transparent campaign-verify" data-title="Успешно пройдена проверка" data-action="verify" onClick={this.openPopup}>
                                            Проверено
                                        </button>
                                        <button className="btn btn-transparent campaign-delete" data-title="Проверка не пройдена" data-action="verify" onClick={this.openPopup}>
                                            Мошенник
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