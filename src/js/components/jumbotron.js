import React from "react";

class Jumbotron extends React.Component {

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <img src="../../../dist/img/header-baner3.jpg" alt=""/>

                    <div className="back-layer"></div>

                    <div className="jumbotron-wrapper">
                        <h1>
                            lifes<span>pulse</span>
                        </h1>
                        <p>
                            Сервис LifesPulse предоставляет возможность начать моментальный сбор средств на
                            лечение.
                        </p>
                        <div className="button-block">
                            <a href="#" className="btn btn-orange">
                                Начать помогать
                            </a>
                            <button className="btn btn-transparent">
                                Начать сбор средств
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Jumbotron;