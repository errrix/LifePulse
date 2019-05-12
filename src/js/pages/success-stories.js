import React from "react";
import Subscribeblock from "../components/subscribeBlock";
import {Link} from "react-router-dom";
import SingleCard from "../components/singleCard";

import {debounce} from "lodash"
import url from"../modules/url"

class successStories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            qt_cards: 0,
            all_categories: [],
            category: '',
            search_text: '',

            searched: false,
            qt_cards_search: 0,

        };

        this.getArchiveCard = this.getArchiveCard.bind(this);
        this.handleLoadMore = debounce(this.handleLoadMore, 1000).bind(this);
    }


    getArchiveCard() {
        fetch(`${url}/api/card/status`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                "status": "archive"
            }),

            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json.response[0]);
            this.setState({cards: json.response})
        })
    }

    handleLoadMore() {
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
                        <div className="card-block">
                            <ul className="card-block-list card-block-list-flex">
                                {this.state.cards ? this.state.cards.map((item) => {
                                    return <li key={item._id}>
                                        <SingleCard card={item}/>
                                    </li>
                                }) : false
                                }
                            </ul>
                            <div className="link-wrapper">
                                <button className="link-bottom-hover" onClick={this.handleLoadMore}>Посмотреть еще</button>
                            </div>

                        </div>
                    </div>
                </div>
                <Subscribeblock/>
            </div>

        )
    }
};


export default successStories;