import React from "react";
import {Link, Redirect} from "react-router-dom";
import url from "../modules/url";
import {connect} from "react-redux";
import validator from "./create-fundraiser/components/validator";

class Donate extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            sum: 20,
            sum_validate: false,
            awaystring: '',
            sign_string: ''
        };

        this.choiceSum = this.choiceSum.bind(this);
        this.handleDonate = this.handleDonate.bind(this);
        this.HandlerChange = this.HandlerChange.bind(this);
        this.validateSum = this.validateSum.bind(this);
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

    validateSum () {
        let elem = document.getElementById('donate-sum');
        if(+elem.value < 1) {
            this.setState({sum_validate: false});
            elem.parentNode.classList.add('label-error');
        } else {
            this.setState({sum_validate: true});
            elem.parentNode.classList.remove('label-error');
        }
    }

    handleDonate(e) {
        e.preventDefault();
        this.validateSum();
        if(this.state.sum_validate) {
            let data = {
                "public_key": "sandbox_i94189500709",
                // "public_key": "i68861001769",
                "version": "3",
                "action": "pay",
                "amount": this.state.sum,
                "currency": "UAH",
                "description": "test",
                "info" : this.props.user_id === '' ? `${this.props.history.location.state.id};5cdc6b1d5528562e5efa4206` : `${this.props.history.location.state.id};${this.props.user_id}` ,
                // "sandbox": 1,
                "result_url": `https://${window.location.host}/usercard/${this.props.history.location.state.id}`,
                "server_url": "https://www.lifespulse.com/pay"
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
                    "card_id": this.props.history.location.state.id
                })
            })
                .then(function (response) {
                    return response.json()
                }).then((json) => {
                console.log(json.response);
                this.setState({
                    sign_string: json.response
                });
                setTimeout(() => {
                    document.querySelector('.donate-page-form').submit();
                }, 0);
            });
        }
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
                                  className="donate-page-form main-form"
                                  // target="_blank"
                                  id="donate-page-form"
                                  onSubmit={this.handleDonate}>
                                <input type="hidden" name="data"
                                       value={this.state.awaystring}/>
                                <input type="hidden" name="signature"
                                       value={this.state.sign_string}/>
                                <label className="label-input">
                                    <span>Хочу пожертвовать</span>
                                    <span className="currency">ГРН</span>
                                    <input type="number"
                                           name="sum"
                                           id="donate-sum"
                                           value={this.state.sum}
                                           onChange={this.HandlerChange}
                                           onBlur={this.validateSum}
                                    />
                                    <span className="error">Введите сумму, поле не должно быть пустым</span>
                                    <p className="fast-choice" onClick={this.choiceSum}>
                                        <span>25</span><span>50</span><span>100</span><span>200</span></p>
                                </label>
                                {/*<label className="label-input">*/}
                                    {/*<span>Ваше имя (не обязательно):</span>*/}
                                    {/*<input placeholder="Василий Васильев Васильевич"*/}
                                           {/*type="text"*/}
                                           {/*name="name"*/}
                                           {/*value={this.state.name}*/}
                                           {/*onChange={this.HandlerChange}*/}
                                    {/*/>*/}
                                {/*</label>*/}
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

const mapStateToProps = (store) => {
    return {
        user_id: store.user_id
    }
};


export default connect(mapStateToProps)(Donate);