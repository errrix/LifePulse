import React from "react";

class donate extends React.Component {

    render() {
        return (
            <div>
                <div className="donate-page-block container">
                    <h2 className="donate-page-block-title">
                        ПОЖЕРТВОВАТЬ
                    </h2>
                    <div className="donate-page-block-info">
                        <p>Назначение платежа: <span>Эрика Волошинец, хроническая лимфоидная лейкемия</span></p>
                        <p>Необходимая сумма: <span>60 000 грн</span></p>
                        <p>Дата начала сбора: <span>06.07.2018</span></p>
                    </div>
                    <form action="" className="donate-page-form">
                        <label className="label-input">
                            <span>Хочу пожертвовать</span>
                            <span className="currency">ГРН</span>
                            <input placeholder="200" type="number"/>
                                <p className="fast-choice">
                                    <span>25</span><span>50</span><span>100</span><span>200</span></p>
                        </label>
                        <label className="label-input">
                            <span>Ваше имя (не обязательно):</span>
                            <input placeholder="Василий Васильев Васильевич" type="text"/>
                        </label>
                        <div className="button-wrapper">
                            <p>Продолжая, Вы соглашаетесь с Политикой конфиденициальности и Правилами перевода денег</p>
                            <button type="submit" className="btn">
                                ПОЖЕРТВОВАТЬ
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
};


export default donate;