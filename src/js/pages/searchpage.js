import React from "react";

import SingleCard from './../components/singleCard'
import {debounce} from "lodash"
import Subscribeblock from "../components/subscribeBlock";
import url from "../modules/url"
import Loader from "../components/loader";

class SearchPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            all_categories: [],

            searched: false,

            search_cards: [],
            qt_cards_search: 0,
            nothing_more_search: false,

            category: '',
            search_text: '',

            last_search_text: '',
            last_category: '',


        };

        this.getCategories = this.getCategories.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.StateValue = this.StateValue.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.showMoreCards = this.showMoreCards.bind(this);
        this.handleLoadMore = debounce(this.handleLoadMore, 200).bind(this);
    }

    //Очищаем поиск, обнуляем счетчик найденых карточек, убираем флаг поиска, обнуляем массив карточек
    clearSearch() {
        this.setState({
            search_cards: [],
            qt_cards_search: 0,
            searched: false,
            nothing_more_search: false,
            category: '',
            search_text: '',
            search_false: false
        })
    }

    getCategories() {
        fetch(`${url}/api/category`, {
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

    StateValue(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    componentDidMount() {
        this.getCategories();
        document.title = "LifesPulse | Поиск"
    }

    showMoreCards() {
        fetch(`${url}/api/card/search?limit=6&skip=${this.state.qt_cards_search}&search=${this.state.search_text}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({
                "category": this.state.category
            })
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            document.getElementById('load-more-button').classList.remove('active-loader', 'm--loader');
            console.log(json.response);
            this.setState({
                search_cards: [...this.state.search_cards, ...json.response],
                qt_cards_search: this.state.qt_cards_search + 6,
                nothing_more_search: json.response.length < 6,
            })
        })
    }

    getSearchCard() {
        if (this.state.search_text === ''
            && this.state.category === ''
            || (this.state.search_text === this.state.last_search_text && this.state.category === this.state.last_category)
        ) {
            console.log(this.state.qt_cards_search);
        } else {
            document.getElementById('search-button').classList.add('active-loader', 'm--loader');
            fetch(`${url}/api/card/search?limit=9&search=${this.state.search_text}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    "category": this.state.category
                })
            })
                .then(function (response) {
                    return response.json()
                }).then((json) => {
                document.getElementById('search-button').classList.remove('active-loader', 'm--loader');
                console.log(json.response);
                this.setState({
                    search_cards: [...json.response],
                    searched: true,
                    qt_cards_search: 9,
                    nothing_more_search: json.response.length < 9,
                    last_search_text: this.state.search_text,
                    last_category: this.state.category,
                    search_false: json.response.length === 0
                })
            })
        }

    }

    handleSearch(e) {
        e.preventDefault();
        this.getSearchCard()
    }

    handleLoadMore() {
        document.getElementById('load-more-button').classList.add('active-loader', 'm--loader');
        this.showMoreCards()
    }

    render() {
        return (
            <div>
                <div className="search-block">
                    <div className="container">
                        <div className="search-input-block">
                            <form onSubmit={this.handleSearch}>
                                <label>
                                    <input type="search"
                                           placeholder="Что Вы хотите найти?"
                                           name="search_text"
                                           onChange={this.StateValue}
                                           value={this.state.search_text}
                                    />
                                </label>
                                <select name="category"
                                        onChange={this.StateValue}
                                        value={this.state.category}>
                                    <option value="">Все категории</option>
                                    {
                                        this.state.all_categories.map((item) => {
                                            return <option key={item._id} value={item._id}>{item.title}</option>
                                        })
                                    }
                                </select>
                                <button type="submit"
                                        className="btn btn-orange m--with-loader">
                                    <span>Поиск</span>
                                    <span className="loader" id="search-button"/>
                                </button>
                            </form>

                            {this.state.searched ? (
                                <div className="clear-search">
                                    <button type="submit" onClick={this.clearSearch}>Очистить поиск</button>
                                </div>
                            ) : <div className="search-text-result h3Header"> Введите запрос который Вас интересует.
                                </div>}

                        </div>

                        <div className="card-block m--search-result">
                            {this.state.search_false ? (
                                <div className="search-text-result h3Header">По Вашему запросу ничего не найдено</div>
                            ) : (
                                <ul className="card-block-list card-block-list-flex">

                                    {this.state.search_cards.map((item) => {
                                        return <li key={item._id}>
                                            <SingleCard card={item}/>
                                        </li>
                                    })}
                                </ul>
                            )}


                            {this.state.searched && !this.state.nothing_more_search ? (
                                <div className="link-wrapper">
                                    <button className="btn m--with-loader" onClick={this.handleLoadMore}>
                                        <span>
                                            Посмотреть еще
                                        </span>
                                        <span className="loader" id="load-more-button"/>
                                    </button>
                                </div>
                            ) : false}
                        </div>
                    </div>
                </div>
                <Subscribeblock/>
            </div>
        )
    }
};

export default SearchPage;