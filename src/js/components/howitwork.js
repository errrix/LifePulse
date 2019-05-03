import React from "react";

class Howitwork extends React.Component {

    render() {
        return (
            <div>

                <div className="marketing-block">
                    <div className="container">
                        <h2 className="h2Header h2Header-underline">
                            КАК ЭТО РАБОТАЕТ
                        </h2>

                        <ul className="info-block-list">
                            <li>
                                <img src="/img/web-log-in.svg" alt="list-logo"/>
                                <div className="text-block">
                                    <h6>
                                       Зарегистрироваться на сервисе LifesPulse
                                    </h6>
                                </div>
                            </li>
                            <li>
                                <img src="/img/plus-18.svg" alt="list-logo"/>
                                <div className="text-block">
                                    <h6>
                                        Для размещения заявки на сервисе Вам должно исполниться 18 лет
                                    </h6>
                                </div>
                            </li>
                            <li>
                                <img src="/img/addition.svg" alt="list-logo"/>
                                <div className="text-block">
                                    <h6>
                                        Перейти в раздел создания заявки и заполнить все обязательные поля
                                    </h6>
                                </div>
                            </li>
                            <li>
                                <img src="/img/support.svg" alt="list-logo"/>
                                <div className="text-block">
                                    <h6>
                                        Заявка создана и ожидает проверки нашими модераторами
                                    </h6>
                                </div>
                            </li>

                            <li>
                                <img src="/img/article.svg" alt="list-logo"/>
                                <div className="text-block">
                                    <h6>
                                        После проверки, Ваша заявка моментально оказывается на сервисе
                                    </h6>
                                </div>
                            </li>

                            <li>
                                <img src="/img/peace.svg" alt="list-logo"/>
                                <div className="text-block">
                                    <h6>
                                        Заявка начинает собирать пожертвования, которые можно вывести спустя минимум 2 недели
                                    </h6>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};

export default Howitwork;