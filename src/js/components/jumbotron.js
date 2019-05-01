import React from "react";
import {Link} from "react-router-dom";
import { changePopup} from "../actions";
import {connect} from "react-redux";

class Jumbotron extends React.Component {

    constructor(props) {
        super(props);

        this.openPopup = this.openPopup.bind(this);
    }

    openPopup() {
        this.props.changePopup(true)
    }

    IsUser() {
        return this.props.roles.indexOf('user') !== -1
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <img src="/img/header-baner3.jpg" alt="jumbotron image"/>

                    <div className="back-layer"/>

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
                            {
                                this.IsUser() ?
                                    <Link to='/create-fundraiser' className="btn btn-transparent">Начать сбор средств</Link>
                                    : <button onClick={this.openPopup} className="btn btn-transparent">Начать сбор средств</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        roles: store.user_roles
    }
};

const mapDispatchToProps = dispatch => ({
    changePopup: boolean => dispatch(changePopup(boolean))
});

export default connect(mapStateToProps, mapDispatchToProps)(Jumbotron);