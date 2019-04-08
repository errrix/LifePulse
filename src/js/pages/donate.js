import React from "react";
import $ from "jquery";

class donate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };

        this.choiceSum = this.choiceSum.bind(this);
    }

    choiceSum(e) {
        var choiceDonate;
        for (let i = 0; i < document.querySelectorAll('.fast-choice span').length; i++) {
            document.querySelectorAll('.fast-choice span')[i].classList.remove("active");
            if(e.target === document.querySelectorAll('.fast-choice span')[i]) {
                choiceDonate = e.target.textContent
            }
        }
        document.querySelector('input').setAttribute("value", choiceDonate);
        e.target.classList.add("active");
    }

    render() {
        return (
            <div>
                <div className="donate-page-block container">
                    <h2 className="h2Header">
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
                                <p className="fast-choice"  onClick={this.choiceSum}>
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