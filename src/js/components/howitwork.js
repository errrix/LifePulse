import React from "react";

class Howitwork extends React.Component {

    render() {
        return (
            <div>

                <div className="marketing-block">
                    <div className="container">
                        <h2 className="h3Header h2Header-underline">
                            КАК ЭТО РАБОТАЕТ
                        </h2>

                        <ul className="info-block-list">
                            <li>
                                <img src="/img/web-log-in.svg" alt="list-logo"/>
                                <div className="text-block">
                                    <h3>
                                        Регистрация на сервисе.
                                    </h3>
                                    <p>
                                        Для регистрации в системе авторизации LifesPulse необходимо указать: свои имя, фамилию, e-mail, а также безопасный пароль . После регистрации и авторизации вам доступен личный кабинет с его функционалом.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src="/img/addition.svg" alt="list-logo"/>
                                <div className="text-block">
                                    <h3>
                                        Размещение заявки.
                                    </h3>
                                    <p>
                                        В личном кабинете перейдите в раздел "Добавить новую публикацию» (только для совершеннолетних). Укажите цель и сумму сбора средств. Заполните обязательные поля, загрузите фото и скан необходимых документов. Опубликуйте заявку.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <img src="/img/peace.svg" alt="list-logo"/>
                                <div className="text-block">
                                    <h3>
                                        Сбор и вывод пожертвований.
                                    </h3>
                                    <p>
                                        С момента публикации ваша заявка начинает собирать пожертвования. Вывести денежные средства на расчетный счет можно в полном объеме или в сумме не менее, чем 500 грн. Заявка закрывается.
                                    </p>
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