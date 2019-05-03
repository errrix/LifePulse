import React from "react";
import $ from "jquery";
import {Link} from "react-router-dom";
import sha1 from "js-sha1"

class donate extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            awaystring: '',
            sign_string: ''
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

    componentDidMount(){
        // console.log(this.props);
        let json_string = {"public_key":"i68861001769","version":"3","action":"pay","amount":"3","currency":"UAH","description":"test","order_id":"00123"};
        let awaystring = btoa(JSON.stringify(json_string));
        console.log(awaystring);
        let sign_string = btoa(sha1(`3BgS6VbCaQCljvZ1F497w4FbzH30G8ZJrSniUsYr${awaystring}3BgS6VbCaQCljvZ1F497w4FbzH30G8ZJrSniUsYr`));
        console.log(sign_string);
        this.setState({
            awaystring: awaystring,
            sign_string: sign_string
        });
    }

    render() {
        return (
            <div>
                <div className="donate-page-block">
                    <div className="container">
                    <h1 className="h2Header">
                        ПОЖЕРТВОВАТЬ
                    </h1>
                    <div className="donate-page-block-info">
                        <p>Назначение платежа: <span>Эрика Волошинец, хроническая лимфоидная лейкемия</span></p>
                        <p>Необходимая сумма: <span>60 000 грн</span></p>
                        <p>Дата начала сбора: <span>06.07.2018</span></p>
                    </div>
                    <form action="https://www.liqpay.ua/api/3/checkout" method="POST" className="donate-page-form">
                        <input type="hidden" name="data"
                               value={this.state.awaystring}/>
                        <input type="hidden" name="signature"
                               value={this.state.sign_string}/>
                        <label className="label-input">
                            <span>Хочу пожертвовать</span>
                            <span className="currency">ГРН</span>
                            {/*<input placeholder="200" type="number"/>*/}
                                <p className="fast-choice"  onClick={this.choiceSum}>
                                    <span>25</span><span>50</span><span>100</span><span>200</span></p>
                        </label>
                        <label className="label-input">
                            <span>Ваше имя (не обязательно):</span>
                            {/*<input placeholder="Василий Васильев Васильевич" type="text"/>*/}
                        </label>
                        <div className="button-wrapper">
                            <p>
                                Продолжая, Вы соглашаетесь с <Link to="/confidentiality"
                                                                   target="_blank"> Политикой конфиденциальности</Link> и <Link
                                to="/rules" target="_blank">Правилами пользования сайтом</Link>
                            </p>
                            <button type="submit" className="btn">
                                Пожертвовать
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

        )
    }
};


export default donate;