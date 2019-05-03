import React from "react";
import $ from "jquery";
import {Link} from "react-router-dom";
import sha1 from "js-sha1"
import b64_sha1 from "../modules/sha1js"

class donate extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            sum: '',
            name: '',
            awaystring: '',
            sign_string: ''
        };

        this.choiceSum = this.choiceSum.bind(this);
        this.handleDonate = this.handleDonate.bind(this);
        this.HandlerChange = this.HandlerChange.bind(this);
    }

    choiceSum(e) {
        for (let i = 0; i < document.querySelectorAll('.fast-choice span').length; i++) {
            document.querySelectorAll('.fast-choice span')[i].classList.remove("active");
            if(e.target === document.querySelectorAll('.fast-choice span')[i]) {
                this.setState({
                    sum: e.target.textContent
                })
            }
        }
        e.target.classList.add("active");
    }

    handleDonate(e) {
        e.preventDefault();
        let data = {
            "public_key":"i68861001769",
            "version":"3",
            "action":"pay",
            "sender_first_name": this.state.name,
            "amount": this.state.sum,
            "currency":"UAH",
            "description":"test",
            "sandbox": 1
        };
        let awaystring = btoa(JSON.stringify(data));
        let sign_string = b64_sha1('3BgS6VbCaQCljvZ1F497w4FbzH30G8ZJrSniUsYr' + awaystring + '3BgS6VbCaQCljvZ1F497w4FbzH30G8ZJrSniUsYr');
        this.setState({
            awaystring: awaystring,
            sign_string: sign_string
        });

        setTimeout(() => {
            document.querySelector('.donate-page-form').submit();
        }, 0);

    }

    HandlerChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    componentDidMount(){

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
                    <form action="https://www.liqpay.ua/api/3/checkout" method="POST" className="donate-page-form" id="donate-page-form" onSubmit={this.handleDonate}>
                        <input type="hidden" name="data"
                               value={this.state.awaystring}/>
                        <input type="hidden" name="signature"
                               value={this.state.sign_string}/>
                        <label className="label-input">
                            <span>Хочу пожертвовать</span>
                            <span className="currency">ГРН</span>
                            <input placeholder="200"
                                   type="number"
                                   name="sum"
                                   value={this.state.sum}
                                   onChange={this.HandlerChange}
                            />
                                <p className="fast-choice"  onClick={this.choiceSum}>
                                    <span>25</span><span>50</span><span>100</span><span>200</span></p>
                        </label>
                        <label className="label-input">
                            <span>Ваше имя (не обязательно):</span>
                            <input placeholder="Василий Васильев Васильевич"
                                   type="text"
                                   name="name"
                                   value={this.state.name}
                                   onChange={this.HandlerChange}
                            />
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