import React from "react";
import {Link} from "react-router-dom";

class Jumbotron extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <img src="../../../dist/img/header-baner3.jpg" alt=""/>

                    <div className="back-layer"></div>

                    <div className="jumbotron-wrapper">
                        <h1 className="h1Header">
                            lifes<span>pulse</span>
                        </h1>
                        <p>
                            Сервис LifesPulse предоставляет возможность начать моментальный сбор средств на
                            лечение.
                        </p>
                        <div className="button-block">
                            <Link to='/allcampaing' className="btn btn-orange">Начать помогать</Link>
                            <Link to='/create-fundraiser' className="btn btn-transparent">Начать сбор средств</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Jumbotron;