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
                            <img src="/img/orange-earth-globe.svg" alt="list-logo"/>
                            <div className="text-block">
                                <h5>
                                    Первые в Украине
                                </h5>
                                <h6>
                                    LifesPulse является первым подобным сервисом в Украине
                                </h6>
                            </div>
                        </li>
                        <li>
                            <img src="/img/give-money-orange.svg" alt="list-logo"/>
                            <div className="text-block">
                                <h5>
                                    Чужой беды не бывает
                                </h5>
                                <h6>
                                    Сегодня поможете Вы - завтра помогут Вам
                                </h6>
                            </div>
                        </li>
                        <li>
                            <img src="/img/share-big-orange.svg" alt="list-logo"/>
                            <div className="text-block">
                                <h5>
                                    Социальные сети
                                </h5>
                                <h6>
                                    У Вас есть возможность делиться историями, которым Вы сопереживаете в
                                    социальных сетях
                                </h6>
                            </div>
                        </li>
                        <li>
                            <img src="/img/heart-hands-orange.svg" alt="list-logo"/>
                            <div className="text-block">
                                <h5>
                                    Помогать легко
                                </h5>
                                <h6>
                                    Несколькими кликами Вы можете спасать жизни
                                </h6>
                            </div>
                        </li>

                        <li>
                            <img src="/img/orange-award.svg" alt="list-logo"/>
                            <div className="text-block">
                                <h5>
                                    Успешные сборы
                                </h5>
                                <h6>
                                    Вы можете увидеть результаты Вашей помощи в разделе "Успешные сборы"
                                </h6>
                            </div>
                        </li>

                        <li>
                            <img src="/img/orange-wax-seal-with-ribbon.svg" alt="list-logo"/>
                            <div className="text-block">
                                <h5>
                                    Благотворители
                                </h5>
                                <h6>
                                    Участники сообщества, получившие пожертвования обязательно увидят всех
                                    благотворителей
                                </h6>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Marketing;