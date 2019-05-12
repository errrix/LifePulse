import React from "react";
import {Redirect} from "react-router-dom"

class ThxCreate extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };
    }

    componentDidMount() {
        document.title = "LifesPulse | Заявка на модерации"
        setTimeout(() => {
            this.setState({
                redirect: true
            })
        }, 5000)
    }

    render() {
        return (

            <div className="thx-create-fund-block">
                {this.state.redirect ? (
                    <Redirect to="/"/>
                ) : (
                    <div className="container">
                        <h1 className="h2Header">
                            Спасибо за {this.props.location.state.action} заявки
                        </h1>
                        <p className="paragraph">Ваша заявка находится на модерации, сообщение после модерации ждите на
                            почте</p>
                    </div>
                )}
            </div>
        )
    }
};

export default ThxCreate;