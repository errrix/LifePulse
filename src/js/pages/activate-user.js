import React from "react";
import {Link} from "react-router-dom";
import url from "../modules/url";
import Loader from "../components/loader";

class ActivateUser extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activated: false
        };

        this.sendToken = this.sendToken.bind(this);
    }

    sendToken() {
        let token = this.props.location.pathname.substring(this.props.location.pathname.lastIndexOf('/') + 1);
        console.log(token)
        fetch(`${url}/api/tokens/check/${token}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            credentials: 'include'
        })
            .then(function (response) {
                return response.json()
            }).then((json) => {
            console.log(json);
            json.success ? this.setState({activated: true}) : false
        })
    }

    componentDidMount(){
        document.title = "LifesPulse | Активация пользователя"
        this.sendToken()
    }

    render() {
        return (

            <div className="activate-block">
                {this.state.activated ? (
                    <h1 className="h3Header">
                        Ваша учётная запись успешно активирована. Можете войти на сайт.
                    </h1>
                ) : (
                    <h1 className="h3Header">
                        <Loader/>
                        Ожидайте. Идёт активация Вашей учётной записи...
                    </h1>
                )}
            </div>
        )
    }
};

export default ActivateUser;