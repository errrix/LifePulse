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
            "public_key":"sandbox_i94189500709",
            "version":"3",
            "action":"pay",
            "sender_first_name": this.state.name,
            "amount": this.state.sum,
            "currency":"UAH",
            "description":"test",
            // "sandbox": 1,
            // "result_url": "http://165.227.11.173:3001/pay",
            "server_url": "https://www.lifespulse.com/pay"
        };
        let awaystring = btoa(JSON.stringify(data));
        let sign_string = b64_sha1('sandbox_5eK3CTLdhGh0eKSQIF8Gj5dswJBYSga4hqarMTIY' + awaystring + 'sandbox_5eK3CTLdhGh0eKSQIF8Gj5dswJBYSga4hqarMTIY');
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
        
        console.log(atob('eyJhY3Rpb24iOiJwYXkiLCJwYXltZW50X2lkIjoxMDE5NDUyNzM1LCJzdGF0dXMiOiJzdWNjZXNzIiwidmVyc2lvbiI6MywidHlwZSI6ImJ1eSIsInBheXR5cGUiOiJjYXJkIiwicHVibGljX2tleSI6InNhbmRib3hfaTk0MTg5NTAwNzA5IiwiYWNxX2lkIjo0MTQ5NjMsIm9yZGVyX2lkIjoiVkxRUE82WDUxNTU3NDk2NDUzODkyNjY2IiwibGlxcGF5X29yZGVyX2lkIjoiWEFEQzlTM0ExNTU3NDk2NDc0NDQyMDYxIiwiZGVzY3JpcHRpb24iOiJ0ZXN0Iiwic2VuZGVyX2ZpcnN0X25hbWUiOiLQk9C10YDQvNCw0L0iLCJzZW5kZXJfbGFzdF9uYW1lIjoi0J3QvtCy0LjQutC+0LIiLCJzZW5kZXJfY2FyZF9tYXNrMiI6IjQyNDI0Mio0MiIsInNlbmRlcl9jYXJkX3R5cGUiOiJ2aXNhIiwic2VuZGVyX2NhcmRfY291bnRyeSI6ODI2LCJpcCI6IjQ2LjE2NS4yNDQuMjI5IiwiYW1vdW50IjoyNS4wLCJjdXJyZW5jeSI6IlVBSCIsInNlbmRlcl9jb21taXNzaW9uIjowLjAsInJlY2VpdmVyX2NvbW1pc3Npb24iOjAuNjksImFnZW50X2NvbW1pc3Npb24iOjAuMCwiYW1vdW50X2RlYml0IjoyNS4wLCJhbW91bnRfY3JlZGl0IjoyNS4wLCJjb21taXNzaW9uX2RlYml0IjowLjAsImNvbW1pc3Npb25fY3JlZGl0IjowLjY5LCJjdXJyZW5jeV9kZWJpdCI6IlVBSCIsImN1cnJlbmN5X2NyZWRpdCI6IlVBSCIsInNlbmRlcl9ib251cyI6MC4wLCJhbW91bnRfYm9udXMiOjAuMCwibXBpX2VjaSI6IjciLCJpc18zZHMiOmZhbHNlLCJsYW5ndWFnZSI6InJ1IiwiY3JlYXRlX2RhdGUiOjE1NTc0OTY0NjY0MDUsImVuZF9kYXRlIjoxNTU3NDk2NDc0NTIyLCJ0cmFuc2FjdGlvbl9pZCI6MTAxOTQ1MjczNX0='))
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