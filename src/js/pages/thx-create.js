import React from "react";

class ThxCreate extends React.Component {

    componentDidMount(){
        document.title = "LifesPulse | Заявка на модерации"
    }

    render() {
        return (

                <div className="registration-confirm-block">
                    <div className="container">
                        <h1 className="h2Header">
                            Спасибо за {this.props.location.state.action} заявки
                        </h1>
                        <p>Ваша заявка находится на модерации, сообщение после модерации ждите на почте</p>
                    </div>
                </div>
        )
    }
};

export default ThxCreate;