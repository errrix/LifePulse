import React from "react";

import Jumbotron from '../components/jumbotron'
import Howitwork from '../components/howitwork'
import Marketing from '../components/marketing'
import BlogHomepage from '../components/blogHomepage'
import СardBlock from '../components/cardBlock'
import pageNotFound from '../components/pageNotFound'


class pageNotFound extends React.Component {

    render() {
        return (
            <div>
                <div className="page-not-found">
                    <div className="container page-not-found-wrapper">
                        <h1>404</h1>
                        <h2>Похоже, вы заблудились</h2>
                        <p>
                            Этой страницы больше не существует, она была удалена или премещена про новому адресу.
                        </p>
                        <a className="link-bottom-hover" href="/">Перейти на Главную</a>
                        <a className="link-bottom-hover" href="/all-cards_new">Выберите, кому бы Вы хотели помочь</a>
                    </div>
                </div>

            </div>

        )
    }
};


export default pageNotFound;