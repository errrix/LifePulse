import React from "react";
import {Link, Redirect} from "react-router-dom"
import url from "../../modules/url"

import CSSTransitionGroup from "react-addons-css-transition-group"

import Complaints from "./components/popup"
import {connect} from "react-redux";


class usercard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPopup: false,
            card_found: true,
            donators: []
        };

        this.getThisCard = this.getThisCard.bind(this);
        this.openPopup = this.openPopup.bind(this);
        this.handleClosePopup = this.handleClosePopup.bind(this);
    }

    handleClosePopup(value) {
        this.setState({
            showPopup: value
        });
    }

    getThisCard() {
        let id = this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf('/') + 1);
        fetch(`${url}/api/card/${id}`, {
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
            if (json.success) {
                this.setState({card: json.response});
                document.title = `LifesPulse | ${this.state.card.for_whom_name}`;
                document.getElementById('user-card-block').classList.add('height-auto');
            } else {
                this.setState({
                    card_found : false
                })
            }
        })
    }

    openPopup() {
        this.setState({
            showPopup: true
        })
    }

    componentDidMount() {
        this.getThisCard();
    }

    render() {
        return (
            <div id="user-card-block">
                {this.state.card_found ? (
                    <div>
                        {this.state.card ? (
                            <div className="user-card-block">
                                <CSSTransitionGroup transitionName="logn-popup"
                                                    transitionEnter={true}
                                                    transitionEnterTimeout={300}
                                                    transitionLeave={true}
                                                    transitionLeaveTimeout={300}>
                                    {this.state.showPopup ? <Complaints id={this.state.card._id}
                                                                        user_id={this.props.user_id}
                                                                        updateStatusPopup={this.handleClosePopup}
                                    /> : false}

                                </CSSTransitionGroup>
                                <div className="container">
                                    <div className="titleCard">
                                        <h1 className="h2Header titleCard-fullName">
                                            {this.state.card.for_whom_name}
                                        </h1>
                                        <p className="h4Header titleCard-shortDiagnosis">
                                            {this.state.card.text_preview}
                                        </p>
                                    </div>

                                    <div className="allInfoBlock">
                                        <div className="allHistoryBlock">
                                            <div className="allHistoryBlock-imgBlock">
                                                <div className="verify-status-block">
                                                    <img src="/img/verified-icon.jpg" alt="verify card"/>
                                                    <div className="verify-status-block-tooltip">
                                                        <p>Заявка проверена и является надежной</p>
                                                    </div>
                                                </div>
                                                {this.state.card.photo_preview ? (
                                                    <img
                                                        src={`${url}/uploads/${this.state.card.photo_preview.filename}`}
                                                        alt={this.state.card.for_whom_name}/>
                                                ) : false}
                                            </div>
                                            <div className="customUserBlock"
                                                 dangerouslySetInnerHTML={{__html: this.state.card.main_text}}>
                                            </div>
                                            <div className="appeal-block">
                                                <button className='link-bottom-hover' onClick={this.openPopup}>Пожаловаться
                                                </button>
                                            </div>
                                        </div>
                                        <div className="shortInfoBlock">
                                            <p className="shortInfoBlock-age">Дата
                                                рождения: <span>{new Date(Date.parse(this.state.card.birthday)).toLocaleDateString()}</span>
                                            </p>
                                            <p className="shortInfoBlock-locations">Место
                                                проживания: <span>{this.state.card.city}</span>
                                            </p>
                                            <p className="shortInfoBlock-category">Категория: <span>{this.state.card.category[0].title}</span>
                                            </p>
                                            <p className="shortInfoBlock-startFund">Начало
                                                сборов: <span>{new Date(Date.parse(this.state.card.createdAt)).toLocaleDateString()}</span>
                                            </p>

                                            <div className="money-count">
                                                <progress value={this.state.card.max_sum} max={this.state.card.sum}/>

                                                <div className="money-how">
                                                    <p>
                                                        Собрали {Math.round(this.state.card.max_sum)} грн
                                                    </p>
                                                    <p>
                                                        из {Math.round(this.state.card.sum)} грн
                                                    </p>
                                                </div>
                                            </div>
                                            {this.state.card.status === 'archive' || this.state.card.status === 'complite' || this.state.card.status === 'ban' ? (
                                                <div>
                                                    <button type="button"
                                                            className="btn"
                                                    >Заявка закрыта
                                                    </button>
                                                </div>

                                            ) :
                                                <Link to={{
                                                pathname: "/donate",
                                                state: {
                                                id: this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf('/') + 1),
                                                for_whom_name: this.state.card.for_whom_name,
                                                date: new Date(Date.parse(this.state.card.createdAt)).toLocaleDateString(),
                                                sum: this.state.card.sum
                                            }
                                            }} className="btn">Помочь</Link>}

                                            <div className="repostBlock">
                                            </div>
                                            <div className="helpedUs">
                                                <h5>Уже помогли</h5>
                                                {this.state.card.donators ? this.state.card.donators.map((item, index) => {
                                                        return <p key={item._id}>
                                                            <span>{this.state.card.donators[index].user.first_name}</span>
                                                            <span>Сума: {this.state.card.donators[index].sum}</span>
                                                            <span>Дата: {new Date(Date.parse(this.state.card.donators[index].date)).toLocaleDateString()}</span>
                                                        </p>
                                                    }) : false
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (<div id="wait-load" className="lp-animation-loader">
                            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2516.4 794.3">
                                <path className="st0"
                                      d="M66.5 436.3l6.5 58.6H7.9l-6.5-58.6V0h65.1v436.3zM151.2 58.6h65.1v71.6h-65.1V58.6zm.6 130.2h63.8v306h-63.8v-306zM274.9 188.8H327V97.7C327 39.1 359.6 0 424.7 0l32.6 6.5v58.6l-35.8-6.5c-19.5 0-29.3 13-29.3 32.6v97.7h65.1v58.6h-65.1v247.4H327V247.4h-52.1v-58.6zM545.1 358.1c0 45.6 32.6 84.7 87.9 84.7 39.1 0 65.8-19.5 75.5-45.6l54.7 26c-26 45.6-71.6 78.1-133.5 78.1-81.4 0-149.8-65.1-149.8-159.5S545 182.3 629.7 182.3c78.1 0 143.3 61.9 143.3 156.3l-6.5 19.5H545.1zm3.3-57.3h156.3c-3.3-33.9-35.8-59.9-74.9-59.9-45.6 0-71.6 26.1-81.4 59.9zM808.8 410.2l58.6-22.8c3.3 32.6 29.3 56.7 61.9 56.7 32.6 0 48.8-17.6 48.8-37.1 0-18.9-13-28.7-39.1-33.2-11.1-2-22.1-4.6-32.6-7.2-52.1-13-87.9-44.3-87.9-93.1 0-58.6 55.3-91.2 107.4-91.2 55.3 0 104.2 35.8 110.7 91.2h-65.1c0-19.5-19.5-33.9-45.6-33.9s-45.6 14.3-45.6 33.9 15.6 30.6 39.1 35.2l32.6 6.5c50.8 11.1 87.9 39.7 87.9 91.8 0 52.1-48.8 94.4-110.7 94.4-61.7 0-107.3-35.8-120.4-91.2z"/>
                                <g>
                                    <path className="st1"
                                          d="M2300.1 633.3c-12-16.4-31.6-44.5-34.1-48.1l-.2-.2c-2.9-4.1-18.7-24.4-42.9-24.4-15 0-28 7.5-38.7 22.3-25.5 35.5-34.9 57.6-35.3 58.6-.1.1-.1.3-.2.4-.6.7-3.7 3.3-13.6 3.1-26.9-.7-152.5-.7-157.8-.7-1.5 0-30.9.3-57 21.5-2.6-18.2-6-48-10.1-97.1-5.3-62.9-11-147.9-17-252.7-10-175.5-17.6-289.9-17.9-297.2-.4-8.9-8.3-15.9-18-16.1h-.3c-9.7 0-17.7 6.9-18.3 15.8l-42.5 619.4c-1.4-2.5-3.3-5-5.8-7.4-11.5-11.3-30.6-15-56.7-10.9-47.6 7.4-101.6-.2-130.7-4.3l-3.4-.5c-23.8-3.3-52.2-10.4-87.3-52.3-14.8-17.6-25.8-30.3-32.8-37.6-3-3.1-5.9-6.1-9.2-8.2-6.5-5.6-22.9-17.1-45.9-16.2-21.8.9-42.2 12.5-60.6 34.6-.7.8-1.3 1.7-1.8 2.6-6.1 11.1-25.4 45.1-33.2 55.4-7.9 10.3-29.1 34.3-54.8 35.5-16.3.7-32.3 4-49.5-14.4-22.1-23.6-42.4-35.1-62.2-35.2h-.3c-22.3 0-35.7 14-43.8 22.4-.9 1-1.8 1.9-2.6 2.7-2.8 2.7-5.3 5.7-7.8 8.6-9.8 11.6-20.1 10.4-47.7 10.4H0v33.5l1060.3-.2c45.5 0 65.3-10 76.6-23.3 2-2.4 4-4.7 5.6-6.3 1.1-1 2.2-2.2 3.4-3.5 5.2-5.4 10.6-11 16.2-11h.1c3 0 14.2 1.8 34.6 23.5 24.9 26.6 50.8 27.3 79.1 26.1 40.3-1.8 69.3-31.8 83-49.6 9.9-12.8 30.3-49.2 35.2-58.2 11.1-13 21.8-19.8 31.9-20.3 11.2-.5 19.7 7.4 20 7.6 1.1 1.1 2.3 2 3.7 2.8 2.6 2.5 10.8 10.9 33.9 38.5 41.4 49.4 77.7 60.4 110.8 65l3.4.5c31.1 4.3 88.9 12.4 142.3 4.2 19.3-3 23.9.8 23.9.8.2.3.3 1.2.3 1.8-.3 1.5-.4 3.1-.3 4.7l18.9 119.3c.8 8.7 8.7 15.3 18.2 15.3h.3c9.5-.1 17.4-7.1 18-15.8l35.7-491.6c.8 14.9 1.7 29.5 2.5 43.7 6.2 107.6 12.2 193.6 17.6 255.6 3.2 37 6.4 65.8 9.3 85.7 1.6 11.2 3.2 19.6 4.8 25.8 1.6 6.1 4.9 18.8 18.1 21.6 6.9 1.4 16.8-.4 22.3-10.2 17.1-30.6 46.7-31.4 47.9-31.4 1.3 0 130.4 0 156.8.7 36.6.9 47.1-20.3 49-25 .8-1.8 9.6-21.4 31.7-52 4.3-5.9 7.3-7.3 8.1-7.3 2.9 0 9.2 5.1 12.3 9.2 3.1 4.4 27.5 39.5 38.8 54.6 6.8 9 14.9 11.7 20.6 12.3 13.5 1.5 23.3-6.6 29.8-11.9.5-.4 1.4-1.2 2.2-1.8H2511V623h-188.1c-10.2-.1-17.2 5.6-22.8 10.3z"/>

                                    <path className="st2"
                                          d="M1167.9 468.8l3.9-3.3 3.3 3.3c19.5 19.5 52.7 32.6 84.7 32.6 84.7 0 156.3-65.1 156.3-159.5s-71.6-159.5-156.3-159.5c-32.6 0-65.1 13-84.7 32.6l-3.3 3.3-3.9-3.3-5.9-26h-58.6v355.1h64.5v-75.3zm88.6-227.9c61.9 0 94.4 45.6 94.4 100.9 0 55.3-32.6 100.9-94.4 100.9-55.3 0-94.4-45.6-94.4-100.9-.1-55.3 39-100.9 94.4-100.9zM1598.3 501.4c26 0 58.6-13 71.6-32.6l3.3-3.3 3.3 3.3 6.5 26h58.6v-306h-65.1v185.6c-2 37.8-33.9 68.4-71.6 68.4-43.6 0-63.8-23.4-65.1-65.1V188.8h-65.1v188.8c-.1 71.7 45.5 123.8 123.6 123.8zM2067.1 444.1c-32.6 0-58.6-24.1-61.9-56.7l-58.6 22.8c13 55.3 58.6 91.2 120.5 91.2s110.7-42.3 110.7-94.4c0-52.1-37.1-80.7-87.9-91.8l-32.6-6.5c-23.4-4.6-39.1-15.6-39.1-35.2s19.5-33.9 45.6-33.9c26 0 45.6 14.3 45.6 33.9h65.1c-6.5-55.3-55.3-91.2-110.7-91.2-52.1 0-107.4 32.6-107.4 91.2 0 48.8 35.8 80.1 87.9 93.1 10.4 2.6 21.5 5.2 32.6 7.2 26 4.6 39.1 14.3 39.1 33.2 0 19.5-16.3 37.1-48.9 37.1zM2373.2 501.4c61.9 0 107.4-32.6 133.5-78.1l-54.7-26c-9.8 26-36.5 45.6-75.5 45.6-55.3 0-87.9-39.1-87.9-84.7H2510l6.5-19.5c0-94.4-65.1-156.3-143.3-156.3-84.7 0-149.8 65.1-149.8 159.5s68.4 159.5 149.8 159.5zm0-260.5c39.1 0 71.6 26 74.9 59.9h-156.3c9.8-33.8 35.8-59.9 81.4-59.9z"/>
                                </g>
                            </svg>

                        </div>)}
                    </div>
                ) : (
                    <Redirect to="/pagenotfound"/>
                )}



            </div>

        )
    }
};

const mapStateToProps = (store) => {
    return {
        user_id: store.user_id
    }
};

export default connect(mapStateToProps)( usercard);