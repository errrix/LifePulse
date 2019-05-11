import React from "react";
import {Link, Redirect} from "react-router-dom";
import url from "../modules/url";

class Donate extends React.Component {


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
            if (e.target === document.querySelectorAll('.fast-choice span')[i]) {
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
            "public_key": "sandbox_i94189500709",
            "version": "3",
            "action": "pay",
            "sender_first_name": this.state.name,
            "amount": this.state.sum,
            "currency": "UAH",
            "description": "test",
            "info" : this.props.history.location.state.id,
            // "sandbox": 1,
            "result_url": `${window.location.host}/usercard/${this.props.history.location.state.id}`,
            "server_url": "https://lifespulse.com/pay"
            // "server_url": "http://165.227.11.173:3001/pay"
        };

        this.setState({
            awaystring: btoa(JSON.stringify(data))
        });

        fetch(`${url}/api/card/donate/prepare`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                "data": btoa(JSON.stringify(data)),
                "card_id": '5cd5913bc789795b569d9c4a'
            })
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            this.setState({
                sign_string: json.response
            });
            setTimeout(() => {
                document.querySelector('.donate-page-form').submit();
            }, 0);

        });

        // let awaystring = btoa(JSON.stringify(data));
        // let sign_string = b64_sha1('sandbox_5eK3CTLdhGh0eKSQIF8Gj5dswJBYSga4hqarMTIY' + awaystring + 'sandbox_5eK3CTLdhGh0eKSQIF8Gj5dswJBYSga4hqarMTIY');
        // console.log(sign_string);




    }

    HandlerChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {this.props.history.location.state ? (
                    <div className="donate-page-block">
                        <div className="container">
                            <h1 className="h2Header">
                                ПОЖЕРТВОВАТЬ
                            </h1>
                            <div className="donate-page-block-info">
                                <p>Назначение платежа: <span>{this.props.history.location.state.for_whom_name}</span></p>
                                <p>Необходимая сумма: <span>{this.props.history.location.state.sum}</span></p>
                                <p>Дата начала сбора: <span>{this.props.history.location.state.date}</span></p>
                            </div>
                            <form action="https://www.liqpay.ua/api/3/checkout"
                                  method="POST"
                                  className="donate-page-form"
                                  target="_blank"
                                  id="donate-page-form"
                                  onSubmit={this.handleDonate}>
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
                                    <p className="fast-choice" onClick={this.choiceSum}>
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
                                                                           target="_blank"> Политикой
                                        конфиденциальности</Link> и <Link
                                        to="/rules" target="_blank">Правилами пользования сайтом</Link>
                                    </p>
                                    <button type="submit" className="btn">
                                        Пожертвовать
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : <Redirect to={"/"}/>}

            </div>

        )
    }
};


export default Donate;