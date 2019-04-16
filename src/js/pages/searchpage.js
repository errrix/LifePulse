import React from "react";

import SingleCard from './../components/singleCard'
import {Link} from "react-router-dom";


class Faq extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="search-input-block">
                        <form action="">
                            <label>
                                <input type="search" required placeholder="Что Вы хотите найти?"/>
                                <button className="header-search">
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         viewBox="0 0 512 512">
                                        <g>
                                            <path d="M495.6,466.4L373.8,339.6c31.3-37.2,48.5-84.1,48.5-132.9C422.3,92.7,329.5,0,215.6,0S8.8,92.7,8.8,206.7
                                s92.7,206.7,206.7,206.7c42.8,0,83.6-12.9,118.4-37.4l122.8,127.7c5.1,5.3,12,8.3,19.4,8.3c7,0,13.6-2.7,18.7-7.5
                                C505.6,494.2,506,477.1,495.6,466.4z M215.6,53.9c84.3,0,152.8,68.5,152.8,152.8s-68.5,152.8-152.8,152.8S62.8,291,62.8,206.7
                                S131.3,53.9,215.6,53.9z"></path>
                                        </g>
                                    </svg>
                                </button>
                            </label>
                            <select name="" id="">
                                <option value="" title="Сердечно-сосудистые">Сердечно-сосудистые</option>
                                <option value="" title="два">два</option>
                                <option value="" title="два">три</option>
                                <option value="" title="два">четыре</option>
                                <option value="" title="два">пять</option>
                                <option value="" title="два">шесть</option>
                                <option value="" title="два">семь</option>
                                <option value="" title="два">восемь</option>
                            </select>
                            <div className="search-result-navigation">
                                <div className="search-result-sort">
                                    <button>Популярные</button>
                                    <button>Новые вверху</button>
                                    <button>Старые вверху</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card-block container">

                        <ul className="card-block-list card-block-list-flex">
                            <li>
                                <SingleCard></SingleCard>
                            </li>
                            <li>
                                <SingleCard></SingleCard>
                            </li>
                            <li>
                                <SingleCard></SingleCard>
                            </li>
                            <li>
                                <SingleCard></SingleCard>
                            </li>
                            <li>
                                <SingleCard></SingleCard>
                            </li>
                            <li>
                                <SingleCard></SingleCard>
                            </li>
                            <li>
                                <SingleCard></SingleCard>
                            </li>
                            <li>
                                <SingleCard></SingleCard>
                            </li>
                            <li>
                                <SingleCard></SingleCard>
                            </li>
                            <li>
                                <SingleCard></SingleCard>
                            </li>
                            <li>
                                <SingleCard></SingleCard>
                            </li>
                            <li>
                                <SingleCard></SingleCard>
                            </li>
                        </ul>

                        <div className="link-wrapper">
                            <a href="/" className="link-bottom-hover">Посмотреть еще</a>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
};

export default Faq;