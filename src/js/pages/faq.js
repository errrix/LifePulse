import React from "react";

class Faq extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        this.toggleAnswer = this.toggleAnswer.bind(this);
    }

    toggleAnswer(e) {
        for(let i = 0; i < document.querySelectorAll('.faq-dropdown-question').length; i++ ) {
            if(e.target === document.querySelectorAll('.faq-dropdown-question')[i]) {
                document.querySelectorAll('.faq-dropdown-question')[i].parentElement.classList.toggle('show-more')
            }
        }
    }

    render() {
        return (
            <div>
                <div className="faq-block container">
                    <h2 className="faq-block-title">ответы на самые частые вопросы</h2>
                    <div className="faq-block-link">
                        <div>
                            <a href="#" className="faq-block-section">О проекте</a>
                            <a href="#" className="faq-block-section">Как начать сбор средств</a>
                        </div>
                        <div>
                            <a href="#" className="faq-block-section">Хочу помочь</a>
                            <a href="#" className="faq-block-section">Помочь проекту</a>
                        </div>
                    </div>
                    <div className="faq-dropdown-block" onClick={this.toggleAnswer}>
                        <div className="faq-dropdown-item">
                            <div className="faq-dropdown-question">
                                <p>Я не хочу регистрироваться! Что можно делать на сайте без регистрации?</p>
                            </div>
                            <div className="faq-dropdown-show-more">
                                <p>
                                    Есть такие варианты действий:
                                    1. Профинансировать понравившийся проект.
                                    2. Подписаться на страницу платформы в Facebook:
                                    https://www.facebook.com/moy.gorod.ua.
                                    3. Профинансировать саму платформу «Мой город».
                                    4. Поделиться понравившимся проектом в социальных сетях.
                                    Есть такие варианты действий:
                                    1. Профинансировать понравившийся проект.
                                    2. Подписаться на страницу платформы в Facebook:
                                    https://www.facebook.com/moy.gorod.ua.
                                    3. Профинансировать саму платформу «Мой город».
                                    4. Поделиться понравившимся проектом в социальных сетях.
                                    4. Поделиться понравившимся проектом в социальных сетях.
                                    Есть такие варианты действий:
                                    1. Профинансировать понравившийся проект.
                                    2. Подписаться на страницу платформы в Facebook:
                                    https://www.facebook.com/moy.gorod.ua.
                                    3. Профинансировать саму платформу «Мой город».
                                    4. Поделиться понравившимся проектом в социальных сетях.
                                </p>
                            </div>
                        </div>
                        <div className="faq-dropdown-item">
                            <div className="faq-dropdown-question">
                                <p>Я не хочу регистрироваться! Что можно делать на сайте без регистрации?</p>
                            </div>
                            <div className="faq-dropdown-show-more faq-dropdown-hide">
                                <p>
                                    Есть такие варианты действий:

                                    1. Профинансировать понравившийся проект.

                                    2. Подписаться на страницу платформы в Facebook:
                                    https://www.facebook.com/moy.gorod.ua.

                                    3. Профинансировать саму платформу «Мой город».

                                    4. Поделиться понравившимся проектом в социальных сетях.
                                </p>
                            </div>
                        </div>
                        <div className="faq-dropdown-item">
                            <div className="faq-dropdown-question">
                                <p>Я не хочу регистрироваться! Что можно делать на сайте без регистрации? Я не хочу
                                    регистрироваться! Что можно делать на сайте без регистрации?</p>
                            </div>
                            <div className="faq-dropdown-show-more faq-dropdown-hide">
                                <p>
                                    Есть такие варианты действий:

                                    1. Профинансировать понравившийся проект.

                                    2. Подписаться на страницу платформы в Facebook:
                                    https://www.facebook.com/moy.gorod.ua.

                                    3. Профинансировать саму платформу «Мой город».

                                    4. Поделиться понравившимся проектом в социальных сетях.
                                </p>
                            </div>
                        </div>
                        <div className="faq-dropdown-item">
                            <div className="faq-dropdown-question">
                                <p>Я не хочу регистрироваться! Что можно делать на сайте без регистрации?</p>
                            </div>
                            <div className="faq-dropdown-show-more faq-dropdown-hide">
                                <p>
                                    Есть такие варианты действий:

                                    1. Профинансировать понравившийся проект.

                                    2. Подписаться на страницу платформы в Facebook:
                                    https://www.facebook.com/moy.gorod.ua.

                                    3. Профинансировать саму платформу «Мой город».

                                    4. Поделиться понравившимся проектом в социальных сетях.
                                </p>
                            </div>
                        </div>
                        <div className="faq-dropdown-item">
                            <div className="faq-dropdown-question">
                                <p>Я не хочу регистрироваться! Что можно делать на сайте без регистрации? Я не хочу
                                    регистрироваться! Что можно делать на сайте без регистрации?</p>
                            </div>
                            <div className="faq-dropdown-show-more faq-dropdown-hide">
                                <p>
                                    Есть такие варианты действий:

                                    1. Профинансировать понравившийся проект.

                                    2. Подписаться на страницу платформы в Facebook:
                                    https://www.facebook.com/moy.gorod.ua.

                                    3. Профинансировать саму платформу «Мой город».

                                    4. Поделиться понравившимся проектом в социальных сетях.
                                </p>
                            </div>
                        </div>
                        <div className="faq-dropdown-item">
                            <div className="faq-dropdown-question">
                                <p>Я не хочу регистрироваться! Что можно делать на сайте без регистрации?</p>
                            </div>
                            <div className="faq-dropdown-show-more faq-dropdown-hide">
                                <p>
                                    Есть такие варианты действий:

                                    1. Профинансировать понравившийся проект.

                                    2. Подписаться на страницу платформы в Facebook:
                                    https://www.facebook.com/moy.gorod.ua.

                                    3. Профинансировать саму платформу «Мой город».

                                    4. Поделиться понравившимся проектом в социальных сетях.
                                </p>
                            </div>
                        </div>
                        <div className="faq-dropdown-item">
                            <div className="faq-dropdown-question">
                                <p>Я не хочу регистрироваться! Что можно делать на сайте без регистрации? Я не хочу
                                    регистрироваться! Что можно делать на сайте без регистрации?</p>
                            </div>
                            <div className="faq-dropdown-show-more faq-dropdown-hide">
                                <p>
                                    Есть такие варианты действий:

                                    1. Профинансировать понравившийся проект.

                                    2. Подписаться на страницу платформы в Facebook:
                                    https://www.facebook.com/moy.gorod.ua.

                                    3. Профинансировать саму платформу «Мой город».

                                    4. Поделиться понравившимся проектом в социальных сетях.
                                </p>
                            </div>
                        </div>
                        <div className="faq-dropdown-item">
                            <div className="faq-dropdown-question">
                                <p>Я не хочу регистрироваться! Что можно делать на сайте без регистрации?</p>
                            </div>
                            <div className="faq-dropdown-show-more faq-dropdown-hide">
                                <p>
                                    Есть такие варианты действий:

                                    1. Профинансировать понравившийся проект.

                                    2. Подписаться на страницу платформы в Facebook:
                                    https://www.facebook.com/moy.gorod.ua.

                                    3. Профинансировать саму платформу «Мой город».

                                    4. Поделиться понравившимся проектом в социальных сетях.
                                </p>
                            </div>
                        </div>
                        <div className="faq-dropdown-item">
                            <div className="faq-dropdown-question">
                                <p>Я не хочу регистрироваться! Что можно делать на сайте без регистрации? Я не хочу
                                    регистрироваться! Что можно делать на сайте без регистрации?</p>
                            </div>
                            <div className="faq-dropdown-show-more faq-dropdown-hide">
                                <p>
                                    Есть такие варианты действий:

                                    1. Профинансировать понравившийся проект.

                                    2. Подписаться на страницу платформы в Facebook:
                                    https://www.facebook.com/moy.gorod.ua.

                                    3. Профинансировать саму платформу «Мой город».

                                    4. Поделиться понравившимся проектом в социальных сетях.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
};

export default Faq;