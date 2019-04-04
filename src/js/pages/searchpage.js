import React from "react";

import SingleCard from './../components/singleCard'


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
                                <option value="">Сердечно-сосудистые заболевания</option>
                                <option value="">два</option>
                                <option value="">три</option>
                                <option value="">четыре</option>
                                <option value="">пять</option>
                                <option value="">шесть</option>
                                <option value="">семь</option>
                                <option value="">восемь</option>
                            </select>
                            <div className="search-result-navigation">
                                <h2 className="h2Header">
                                    Результаты поиска
                                </h2>
                                <div className="search-result-sort">
                                    <button>Популярные</button>
                                    <button>Завершаются</button>
                                    <button>Новые вверху</button>
                                    <button>Старые вверху</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card-block container">

                        <ul className="card-block-list">
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
                            <a href="/">Посмотреть еще</a>
                        </div>

                    </div>
                </div>

            </div>

        )
    }
};

export default Faq;