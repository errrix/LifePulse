import React from "react";

import SingleCard from './../components/singleCard'
import {debounce} from "lodash"

class SearchPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            qt_cards: 0,
            all_categories: [],
            category: '',
            search_text: ''

        };

        this.getActiveCard = this.getActiveCard.bind(this);
        this.getCategories = this.getCategories.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.StateValue = this.StateValue.bind(this);
        this.searchFundraiser = this.searchFundraiser.bind(this);
        this.handleLoadMore = debounce(this.handleLoadMore,1000).bind(this);
    }

    getCategories() {
        fetch('http://165.227.11.173:3001/api/category', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            this.setState({all_categories: json.response});
        })
    }

    getActiveCard() {
        let limit = 2;
        this.state.qt_cards === 0 ? limit = 2 : limit = 2;
        fetch(`http://165.227.11.173:3001/api/card/active/?limit=${limit}&skip=${this.state.qt_cards}&new=1`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json.response);
            this.setState({
                cards: [...this.state.cards, ...json.response],
                qt_cards: this.state.qt_cards + limit
            })
        })
    }

    searchFundraiser(e) {
        e.preventDefault();
        console.log(this.props.userId);
        fetch('http://165.227.11.173:3001/api/card/search?searsh=', {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({
                "text_preview": this.state.text_preview,
                "full_name": this.state.full_name,
                "category": [this.state.category]
            })
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json);
            // this.props.updateStatusPopup(false);
        })
    }

    StateValue(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    componentDidMount() {
        this.getActiveCard();
        this.getCategories();
        document.title = "LifesPulse | Поиск"
    }

    handleSearch(e) {
        e.preventDefault();
        fetch(`http://165.227.11.173:3001/api/card/search?name=${this.state.search_text}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json.response);
        })
    }

     handleLoadMore () {
         this.getActiveCard()
     }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="search-input-block">
                        <form action="" onSubmit={this.handleSearch}>
                            <label>
                                <input type="search" placeholder="Что Вы хотите найти?" name="search_text" onChange={this.StateValue}/>
                            </label>
                            <select  name="category" onChange={this.StateValue}>
                                {
                                    this.state.all_categories.map((item, index) => {
                                        return <option key={item._id} value={item._id}>{item.title}</option>
                                    })
                                }
                            </select>
                            <button type="submit" className="btn btn-orange"  onClick={this.searchFundraiser}>Поиск</button>
                            {/*<div className="search-result-navigation">*/}
                                {/*<div className="search-result-sort">*/}
                                    {/*<button>Популярные</button>*/}
                                    {/*<button>Новые вверху</button>*/}
                                    {/*<button>Старые вверху</button>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </form>
                    </div>
                    <div className="card-block container">

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

        )
    }
};

export default SearchPage;