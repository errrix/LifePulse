import React from "react";

class Faq extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.toggleAnswer = this.toggleAnswer.bind(this);
    }

    toggleAnswer(e) {
        for (let i = 0; i < document.querySelectorAll('.faq-dropdown-question').length; i++) {
            if (e.target === document.querySelectorAll('.faq-dropdown-question')[i]) {
                document.querySelectorAll('.faq-dropdown-question')[i].parentElement.classList.toggle('show-more')
            }
        }
    }

    render() {
        return (
            <div>
                <div className="faq-block">
                    <div className="container">
                        <h1 className="h2Header">ответы на самые частые вопросы</h1>

                        <div className="faq-dropdown-block" onClick={this.toggleAnswer}>
                            <div className="faq-dropdown-item">
                                <div className="faq-dropdown-question">
                                    <p>Что может делать на сайте не зарегистрированный пользователь?</p>
                                </div>
                                <div className="faq-dropdown-show-more">
                                    <p>
                                        Есть такие варианты действий:
                                        1. Профинансировать любую кампанию.
                                        2. Подписаться на новостную рассылку платформы.
                                        3. Профинансировать сам сервис «LfesPulse».
                                        4. Поделиться понравившимся проектом в социальных сетях.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-dropdown-item">
                                <div className="faq-dropdown-question">
                                    <p>Кто может пожертвовать деньги?</p>
                                </div>
                                <div className="faq-dropdown-show-more">
                                    <p>
                                        Любой пользователь сайта.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-dropdown-item">
                                <div className="faq-dropdown-question">
                                    <p>Кто может начинать сбор средств?</p>
                                </div>
                                <div className="faq-dropdown-show-more faq-dropdown-hide">
                                    <p>
                                        Сервис открыт для каждого человека, который достиг совершенолетия. Главные
                                        критерии для начала сбора средств -
                                        быть зарегистрированным пользователем, иметь отсканированные больничные
                                        документы и первую страницу паспорта.
                                        Далее правильно заполнить форму на сайте и ожидать проверки наших модераторов.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-dropdown-item">
                                <div className="faq-dropdown-question">
                                    <p>Когда я могу получить деньги, которые собрала моя заявка?</p>
                                </div>
                                <div className="faq-dropdown-show-more faq-dropdown-hide">
                                    <p>
                                        В личном кабинете пользователя выбираете вашу заявку и останавливаете сбор. Сбор
                                        нельзя остановить раньше, чем
                                        через 2 недели после старта и не собрав минимум 500грн или 10% от указанной Вами
                                        суммы. В течении 5 рабочих дней деньги будут зачислены на
                                        указанный Вами счет в банке.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-dropdown-item">
                                <div className="faq-dropdown-question">
                                    <p>Могу ли я создать еще одну заявку?</p>
                                </div>
                                <div className="faq-dropdown-show-more faq-dropdown-hide">
                                    <p>
                                        Один пользователь может создать одну заявку. Если необходимо начать новый сбор
                                        средств на того же человека, что была и первая заявка
                                        или на другого человека (родственник, друг, ребенок) - то перед этим в Вашем
                                        личном кабинете к Вашей первой заявке необходимо прикрепить
                                        отчет о целевом использовании собранных и выведенных Вами средств по прошлому
                                        сбору средств.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-dropdown-item">
                                <div className="faq-dropdown-question">
                                    <p>Могу ли я создать сбор средств для другого (родственник, друг, ребенок)
                                        человека?</p>
                                </div>
                                <div className="faq-dropdown-show-more faq-dropdown-hide">
                                    <p>
                                        Можете. Для этого в форме при создании заявки необходимо выбрать для кого
                                        создается сбор средств. А так же необходимо два скана первой страницы
                                        паспорта - автора заявки и реципиента. Для проверки и дополнительного уточнения
                                        информации с Вами может связаться модератор.
                                    </p>
                                </div>
                            </div>
                            <div className="faq-dropdown-item">
                                <div className="faq-dropdown-question">
                                    <p>В безопасности ли мои личные данные?</p>
                                </div>
                                <div className="faq-dropdown-show-more faq-dropdown-hide">
                                    <p>
                                        При создании заявки сканы паспорта и больничных документов будут доступны только
                                        нашим модератором для проверки информации и на сайт в
                                        общий доступ эта информация не попадет. Фото, которые вы хотите приложить для
                                        общего доступа можно добавлять в пункте "Ваша история".
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        )
    }
};

export default Faq;