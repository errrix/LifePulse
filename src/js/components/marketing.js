import React from "react";

class Marketing extends React.Component {

    render() {
        return (
            <div className="marketing-block">
                <div className="container">
                    <h2 className="h2Header h2Header-underline">
                        Почему нам стоит доверять?
                    </h2>

                    <ul className="info-block-list">
                        <li>
                            <img src="/img/first.svg" alt="list-logo"/>
                            <div className="text-block">
                                <h3>
                                    Первые в Украине
                                </h3>
                                <p>
                                    LifesPulse - первая в украинском сегменте сети платформа онлайн-пожертвований, предлагающая простой, быстрый и законный способ собрать необходимую сумму на лечение детей и взрослых.
                                </p>
                            </div>
                        </li>

                        <li>
                            <img src="/img/robbery.svg" alt="list-logo"/>
                            <div className="text-block">
                                <h3>
                                    Защита от мошенничества
                                </h3>
                                <p>
                                    Модераторы системы проверяют каждую заявку на предмет мошенничества. Спонсоры могут быть уверенны в целевом финансировании. Результат помощи всегда доступен в разделе «Успешные сборы».
                                </p>
                            </div>
                        </li>

                        <li>
                            <img src="/img/support.svg" alt="list-logo"/>
                            <div className="text-block">
                                <h3>
                                    Поддержка и коммуникация
                                </h3>
                                <p>
                                    Доступ к сервису возможен в любое время. Техническая поддержка сайта работает в режиме 24 часа 7 дней в неделю. Также можно следить  за нашими новостями и делиться историями в социальных сетях.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Marketing;