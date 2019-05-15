import React from "react";
import Subscribeblock from "../components/subscribeBlock";
import {Link} from "react-router-dom";
import SingleCard from "../components/singleCard";

import {debounce} from "lodash"
import url from"../modules/url"
import Loader from "../components/loader";

class successStories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            qt_cards: 0,
            nothing_more: false,
        };

        this.getArchiveCard = this.getArchiveCard.bind(this);
        this.handleLoadMore = debounce(this.handleLoadMore, 200).bind(this);
    }


    getArchiveCard() {
        let limit = 3;
        this.state.qt_cards === 0 ? limit = 6 : limit = 6;

        fetch(`${url}/api/card/status/archive/?limit=${limit}&skip=${this.state.qt_cards}&new=1`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json);
            if (json.response.length === 0) {
                this.setState({
                    nothing_more: true
                })
            }
            this.setState({
                cards: [...this.state.cards, ...json.response],
                qt_cards: this.state.qt_cards + limit,
                nothing_more: json.response.length < 6
            });
            if( document.querySelector('.loader')) {
                document.querySelector('.loader').classList.remove('active-loader', 'm--loader');
            }
        })
    }

    handleLoadMore() {
        document.querySelector('.loader').classList.add('active-loader', 'm--loader');
        this.getArchiveCard()
    }

    componentDidMount(){
        this.getArchiveCard();
        document.title = "LifesPulse | Успешные сборы"
    }

    render() {
        return (
            <div>
                <div className="success-stories-block">
                    <div className="container">
                        <h1 className="h3Header h2Header-underline">ЗАВЕРШЕННЫЕ СБОРЫ</h1>
                        {this.state.cards.length > 0 ? (
                        <div className="card-block m--search-result">
                            <ul className="card-block-list card-block-list-flex">
                                {this.state.cards ? this.state.cards.map((item) => {
                                    return <li key={item._id}>
                                        <SingleCard card={item}/>
                                    </li>
                                }) : false
                                }
                            </ul>
                            {!this.state.nothing_more ? (
                                <div className="link-wrapper">
                                    <button className="btn m--with-loader" onClick={this.handleLoadMore}>
                                    <span>
                                        Посмотреть еще
                                    </span>
                                        <span className="loader"/>
                                    </button>
                                </div>
                            ) : false}
                        </div>
                            ): (
                            <Loader/>
                        )}
                    </div>
                </div>
                <Subscribeblock/>
            </div>
        )
    }
};


export default successStories;