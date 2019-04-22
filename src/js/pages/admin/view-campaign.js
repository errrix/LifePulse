import React from "react";

import AdminMenu from '../../components/adminMenu'
import AdminHeader from '../../components/adminHeader'

class viewCampaign extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            card: {}
        };

        this.getthisCard = this.getthisCard.bind(this);
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
            this.setState({card : json.response});
            console.log(this.state.card)
        })
    }

    componentDidMount() {
        this.getthisCard();
    }

    render() {
        return (
            <div>
                <AdminHeader/>
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
                                        <select disabled="disabled" value={this.state.card.category}>
                                            <option value="">Сердечно-сосудистые заболевания</option>
                                            <option value="">два</option>
                                            <option value="">три</option>
                                            <option value="">четыре</option>
                                            <option value="">пять</option>
                                            <option value="">шесть</option>
                                            <option value="">семь</option>
                                            <option value="">восемь</option>
                                        </select>
                                    </label>

                                    <div className="main-foto">
                                        <h3>
                                            Фото обложки
                                        </h3>
                                        <img src="../../../dist/img/card1.jpg" alt=""/>
                                    </div>

                                    <label className="label-input label-textarea">
                                        <span>Основной текст заявки</span>
                                        <textarea disabled="disabled"  value={this.state.card.main_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam animi assumenda atque autem blanditiis dolorem dolores esse, explicabo, facilis laboriosam libero maiores minus molestiae nam non, odit quisquam quo quod ratione repudiandae sed tempore vero. Accusamus alias architecto atque aut beatae culpa cum delectus deleniti deserunt dolor eligendi et, excepturi exercitationem facere incidunt inventore ipsam laboriosam libero minima molestias nulla odio quam quisquam, repellat similique, sint suscipit veritatis. Consequatur corporis deserunt dicta eius facilis ipsa itaque nisi veritatis. A at autem excepturi, illo, itaque natus nisi optio perspiciatis porro quo quod reiciendis sed totam, vel veritatis. Aliquid architecto aspernatur debitis deserunt dolore eius esse eum excepturi fugiat magnam nam nesciunt nisi provident, qui, quos reprehenderit sapiente vero. Aut beatae, consequatur deleniti dicta enim, labore libero minima molestias neque officiis praesentium quidem tenetur? Aliquam amet, asperiores, aut, consequatur cum debitis doloribus dolorum eius ex harum ipsa iure iusto laborum magnam molestias nostrum obcaecati officia perferendis quis reiciendis reprehenderit sequi tempora ut vel voluptate. Enim nesciunt perspiciatis repudiandae sapiente suscipit. Ab ad aliquid ipsum magnam porro ut vero! Alias, aperiam commodi consectetur ea eligendi modi molestias nam, perferendis quos rerum sequi sunt, tempore totam ut voluptatem. Ad architecto assumenda blanditiis culpa cum cupiditate deserunt dicta eaque eum exercitationem expedita facilis id incidunt ipsa iste, itaque iusto laborum mollitia nemo nulla obcaecati officia omnis possimus quibusdam quisquam quos saepe sed sequi suscipit tempora tempore vel velit voluptatum. Asperiores assumenda commodi consectetur consequuntur exercitationem, in iure laborum, minima mollitia porro quibusdam quidem velit voluptatibus. Aliquid at atque blanditiis commodi facere, in necessitatibus nostrum porro quod sint tempora vero voluptatum! Dolore doloribus eum fuga provident vero! Aliquam modi quo reiciendis tempora ullam ut voluptatibus. Alias architecto blanditiis dicta, dolore dolores ex excepturi facere harum minima molestiae natus numquam odit, quos recusandae reiciendis repellendus, voluptatibus!
                        </textarea>
                                    </label>

                                    <div className="link-block">
                                        <h3>
                                            Документы:
                                        </h3>

                                        <div className="link-block-wrapper">
                                            <a href="/">
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
                                            <a href="/">
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
                                            <a href="/">
                                                <span>Img больничных документов:</span>
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
                                        </div>

                                    </div>

                                    <div className="button-wrapper hide">
                                        <button type="submit" className="btn">Сохранить</button>
                                    </div>

                                </form>

                                <div className="button-block">
                                    <button className="btn btn-transparent campaign-back">
                                        на доработку
                                    </button>
                                    <button className="btn campaign-publish">
                                        Опубликовать
                                    </button>
                                    <button className="btn btn-transparent campaign-delete">
                                        Отклонить
                                    </button>
                                    <button className="btn btn-transparent campaign-edit">
                                        редактировать
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>

            </div>

        )
    }
};


export default viewCampaign;