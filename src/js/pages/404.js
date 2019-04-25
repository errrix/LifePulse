import React from "react";
import {Link} from "react-router-dom";

class pageNotFound extends React.Component {

    componentDidMount(){
        document.title = "LifesPulse | Страница не найдена"
    }

    render() {
        return (
            <div>
                <div className="page-not-found">
                    <div className="container">
                        <h1>404</h1>
                        <h2 className="h2Header">Похоже, вы заблудились</h2>
                        <p>
                            Этой страницы больше не существует, она была удалена или премещена про новому адресу.
                        </p>
                        <Link to='/' className="link-bottom-hover">Перейти на главную</Link>
                        <Link to='/allcampaing' className="link-bottom-hover">Начать помогать</Link>
                    </div>
                </div>
            </div>

        )
    }
};


export default pageNotFound;