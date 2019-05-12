import React from "react";
import {Redirect} from "react-router-dom"

class RegistrationConfirm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        };


    }

    componentDidMount() {
        document.title = "LifesPulse | Подтверждение регистрации"
        setTimeout(() => {
            this.setState({
                redirect: true
            })
        }, 5000)
    }

    render() {
        return (
            <div className="registration-confirm-block">
                {this.state.redirect ? (
                    <Redirect to="/"/>
                ) : (
                    <div className="container">
                        <h1 className="h2Header">
                            Спасибо за регистрацию
                        </h1>
                        <p className="paragraph">Теперь Вы можете залогиниться на сайте.</p>
                    </div>
                )}
            </div>
        )
    }
};


export default RegistrationConfirm;