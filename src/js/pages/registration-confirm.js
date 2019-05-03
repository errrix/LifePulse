import React from "react";

class RegistrationConfirm extends React.Component {

    componentDidMount(){
        document.title = "LifesPulse | Подтверждение регистрации"
    }

    render() {
        return (

                <div className="registration-confirm-block">
                    <div className="container">
                        <h1 className="h2Header">
                            Спасибо за {this.props.location.state.action}
                        </h1>
                        <p className="paragraph">Теперь Вы можете залогиниться на сайте.</p>
                    </div>
                </div>

        )
    }
};


export default RegistrationConfirm;