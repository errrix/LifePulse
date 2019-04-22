import React from "react";

import BackBtnBlock from '../components/backBtnBlock'
import TitleUserCard from '../components/titleUserCard'



class usercard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // id: this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf('/') + 1),
            card: {}
        };

        this.getThisCard = this.getThisCard.bind(this);
    }

    getThisCard() {
        let id = this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf('/') + 1);
        fetch(`http://165.227.11.173:3001/api/card/${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json);
            this.setState({card : json.response});
            console.log(this.state.card)
        })
    }

    componentDidMount() {
        this.getThisCard();
    }

    render() {
        return (
            <div>

                <BackBtnBlock/>
                <div>

                    <div className="user-card-block">
                        <div className="container">
                            <div className="titleCard">
                                <h1 className="h2Header titleCard-fullName">
                                    {this.state.card.for_whom_name}
                                </h1>
                                <p className="h4Header titleCard-shortDiagnosis">
                                    {this.state.card.text_preview}
                                </p>
                            </div>

                            <div className="help-btn-block">
                                <button className="btn">Хочу помочь</button>
                            </div>

                            <div className="money-count">
                                <progress value={this.state.card.max_sum} max={this.state.card.sum}/>

                                <div className="money-how">
                                    <p>
                                        Собрали {this.state.card.max_sum} грн
                                    </p>
                                    <p>
                                        из {this.state.card.sum} грн
                                    </p>
                                </div>
                            </div>

                            <div className="allInfoBlock">
                                <div className="allHistoryBlock">
                                    <div className="allHistoryBlock-imgBlock">
                                        <img src="/img/victoria-gonzales.jpg" alt=""/>
                                    </div>
                                    <div className="customUserBlock">
                                        <p>
                                            {this.state.card.main_text}
                                        </p>
                                    </div>
                                </div>
                                <div className="shortInfoBlock">
                                    <p className="shortInfoBlock-age">Дата рождения: <span>{new Date(Date.parse(this.state.card.birthday)).toLocaleDateString()}</span></p>
                                    <p className="shortInfoBlock-locations">Место
                                        проживания: <span>{this.state.card.city} {this.state.card.address}</span>
                                    </p>
                                    <p className="shortInfoBlock-category">Категория: <span>{this.state.card.category}</span></p>
                                    <p className="shortInfoBlock-startFund">Начало сборов: <span>{new Date(Date.parse(this.state.card.createdAt)).toLocaleDateString()}</span></p>

                                    <div className="money-count">
                                        <progress value={this.state.card.max_sum} max={this.state.card.sum}/>

                                        <div className="money-how">
                                            <p>
                                                Собрали {this.state.card.max_sum} грн
                                            </p>
                                            <p>
                                                из {this.state.card.sum} грн
                                            </p>
                                        </div>
                                    </div>
                                    <button className="btn">Хочу помочь</button>
                                    <div className="repostBlock">
                                    </div>
                                    <div className="helpedUs">
                                        <h5>Уже помогли</h5>
                                        <p>
                                            <span>Игорь</span>
                                            <span>Сума: 50,00 грн.</span>
                                            <span>Дата: 12 грудня 2018 р.</span>
                                        </p>
                                        <p>
                                            <span>Игорь</span>
                                            <span>Сума: 50,00 грн.</span>
                                            <span>Дата: 12 грудня 2018 р.</span>
                                        </p>
                                        <p>
                                            <span>Игорь</span>
                                            <span>Сума: 50,00 грн.</span>
                                            <span>Дата: 12 грудня 2018 р.</span>
                                        </p>
                                        <p>
                                            <span>aninimouse</span>
                                            <span>Сума: 50,00 грн.</span>
                                            <span>Дата: 12 грудня 2018 р.</span>
                                        </p>
                                        <p>
                                            <span>Игорь</span>
                                            <span>Сума: 50,00 грн.</span>
                                            <span>Дата: 12 грудня 2018 р.</span>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};

export default usercard;