import React from "react";
import {connect} from "react-redux";
import {Redirect, Link} from "react-router-dom";
import CSSTransitionGroup from "react-addons-css-transition-group"

import MyFollow from './components/follow'
import MyCampaignList from './components/my-campaign-list'
import {addUserInfo} from "../../actions";

class UserAccount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            first_name: this.props.first_name,
            last_name: this.props.last_name,
            email: this.props.email,
            phone: this.props.phone,
            user_role: this.props.phone.role,
            show_follow: false
        };

        this.showFollow = this.showFollow.bind(this);
        this.showMyCampaign = this.showMyCampaign.bind(this);
        this.getUserData = this.getUserData.bind(this);
    }

    getUserData() {
        fetch('http://165.227.11.173:3001/api/users/mydata', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'GET',
            credentials: "include"
        })
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json.response);
                this.props.HandleAddUserInfo({
                    first_name: json.response.first_name,
                    last_name: json.response.last_name,
                    email: json.response.email,
                    phone: json.response.phone,
                    user_role: json.response.phone.role
                });
                this.setState({
                    email: json.response.email,
                    name: json.response.first_name,
                    last_name: json.response.last_name,
                    phone: json.response.phone,
                    id: json.response._id

                });
            })
    }

    componentDidMount() {
        if(this.props.first_name === '') {
            this.getUserData()
        }
    }

    showFollow() {
        this.setState({show_follow: true})
    }

    showMyCampaign() {
        this.setState({show_follow: false})
    }

    render() {
        const {user_id} = this.props;

        return (
            <div>
                {
                    (this.props.user_id) ? (
                        <div className="user-account-block">
                            <div className="container">

                                <div className="user-account-top-block">

                                    <div className="text-block">

                                            <h2 className="h3Header">{this.state.name} {this.state.last_name}</h2>

                                            <h4 className="h4Header">
                                                Почта: <span>{this.state.email}</span>
                                            </h4>

                                            <h4 className="h4Header">
                                                Номер телефона: <span>
                                                {this.state.phone !== '' ? this.state.phone : 'не указан'}
                                                </span>
                                            </h4>

                                    </div>
                                    <div className="btn-logout-block">

                                        {/*<a href="/">Редактировать профиль</a>*/}
                                        <button className="logout-user-btn">Выйти</button>
                                    </div>
                                </div>

                                <div className="user-account-main-block">
                                    <div className="button-block">
                                        <button type="button"
                                                className={this.state.show_follow ? "active follow" : "follow"}
                                                onClick={this.showFollow}>Я слежу
                                        </button>
                                        <button type="button"
                                                className={this.state.show_follow ? "my-campaign" : "my-campaign active"}
                                                onClick={this.showMyCampaign}>Мои публикации
                                        </button>
                                        {!this.state.show_follow ? (
                                            <Link to="/create-fundraiser" className="active">
                                                <div className="add-icon"/>
                                                <span>Добавить новую публикацию</span>
                                            </Link>
                                        ) : false}

                                    </div>
                                    <div className="user-account-main-block-container">
                                        <CSSTransitionGroup transitionName="logn-popup"
                                                            transitionEnter={true}
                                                            transitionEnterTimeout={300}
                                                            transitionLeave={true}
                                                            transitionLeaveTimeout={300}>
                                            {this.state.show_follow ? <MyFollow/> : <MyCampaignList user_id={this.state.id}/>}
                                        </CSSTransitionGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Redirect to="/"/>
                    )}
            </div>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        user_id: store.user_id,
        user_info : store.user_info,
        first_name: store.user_info.first_name,
        last_name: store.user_info.last_name,
        email: store.user_info.email,
        phone: store.user_info.phone,
        user_role: store.user_info.user_role
    }
};

const mapDispatchToProps = dispatch => ({
    HandleAddUserInfo: object => dispatch(addUserInfo(object))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);