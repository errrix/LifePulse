import React from "react";
import {Link} from "react-router-dom";

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
                        <Link to='/' className="link-bottom-hover">Перейти на Главную</Link>
                        <Link to='/allcampaing' className="link-bottom-hover">Выберите, кому бы Вы хотели помочь</Link>
                    </div>
                </div>

            </div>

        )
    }
};


export default pageNotFound;