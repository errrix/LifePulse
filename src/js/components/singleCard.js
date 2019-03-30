import React from "react";

class SingleCard extends React.Component {

    render() {
        return (
            <a href="/" className="single-card">
                <img src="../../../dist/img/card1.jpg" alt=""/>

                <div className="text-block">
                    <h4>
                        Камишанченко Оксана
                    </h4>
                    <h6>
                        Острое нарушение мозгового кровообращения по ишемическому типу в басейне
                        левой
                        внутренней
                        сонной
                        артерии
                    </h6>

                    <div className="money-count">
                        <progress value="90" max="100"></progress>
                        <div className="money-how">
                            <p>
                                Собрали 20 000 грн
                            </p>
                            <p>
                                из 30 000 грн
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        )
    }
};

export default SingleCard;