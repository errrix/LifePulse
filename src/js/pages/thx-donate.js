import React from "react";

class ThxDonate extends React.Component {

    componentDidMount(){
        document.title = "LifesPulse | Заявка на модерации"
    }

    render() {
        return (
            <div className="thx-create-fund-block">
                <div className="container">
                    <h1 className="h2Header">
                        Спасибо за Вашу помощь
                    </h1>
                    <p className="paragraph">Ваша помощь неоценима</p>
                </div>
            </div>
        )
    }
};

export default ThxDonate;