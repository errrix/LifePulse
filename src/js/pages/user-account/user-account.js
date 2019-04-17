import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import CSSTransitionGroup from "react-addons-css-transition-group"

import MyFollow from './components/follow'
import MyCampaignList from './components/my-campaign-list'

class UserAccount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            last_name: '',
            phone: '',
            show_follow: true
        }

        this.showFollow = this.showFollow.bind(this);
        this.showMyCampaign = this.showMyCampaign.bind(this);
    }

    componentDidMount() {
        console.log('some test');
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
                this.setState({
                    email: json.response.email,
                    name: json.response.first_name,
                    last_name: json.response.last_name,
                    phone: json.response.phone
                });
            })
    }

    showFollow () {
        this.setState({show_follow: true})
    }

    showMyCampaign() {
        this.setState({show_follow: false})
    }

    render() {
        const {tokenData} = this.props;

        return (
            <div>
                {
                    (this.props.tokenData) ? (
                        <div className="user-account-block">
                                <div className="container">

                                <div className="user-account-top-block">
                                    <div className="image-block">
                                        <div className="back-layer"/>
                                        <img src="../../../../dist/img/men_women.png" alt="user image"/>
                                    </div>

                                    <div className="text-block">

                                        <div>
                                            <div className="top-block">
                                                <h2 className="h3Header">{this.state.name} {this.state.last_name}</h2>

                                                <button className="logout-user-btn">Выйти</button>
                                                {/*<a href="/">Редактировать профиль</a>*/}
                                            </div>

                                            <h4 className="h4Header">
                                                Почта: <span>{this.state.email}</span>
                                            </h4>

                                            <h4 className="h4Header">
                                                Номер телефона: <span>
                                                {this.state.phone !== '' ? this.state.phone : 'не указан'}
                                                </span>
                                            </h4>
                                        </div>
                                        <div>


                                            {/*<div className="bottom-block">*/}
                                            {/*<h4>Профили в социальных сетях</h4>*/}

                                            {/*<div className="social-link-block">*/}
                                            {/*<a href="/" className="active">*/}
                                            {/*/!*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">*!/*/}
                                            {/*/!*<path*!/*/}
                                            {/*/!*d="M460.8 0H51.2C23 0 0 23 0 51.2v409.6C0 489 23 512 51.2 512h409.6c28.2 0 51.2-23 51.2-51.2V51.2C512 23 489 0 460.8 0zm-25.6 51.2V128H384c-15.4 0-25.6 10.2-25.6 25.6v51.2h76.8v76.8h-76.8v179.2h-76.8V281.6h-51.2v-76.8h51.2v-64c0-48.6 41-89.6 89.6-89.6h64z"></path>*!/*/}
                                            {/*/!*</svg>*!/*/}
                                            {/*</a>*/}

                                            {/*<a href="/">*/}
                                            {/*/!*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">*!/*/}
                                            {/*/!*<path*!/*/}
                                            {/*/!*d="M460.8 0H51.2C23 0 0 23 0 51.2v409.6C0 489 23 512 51.2 512h409.6c28.2 0 51.2-23 51.2-51.2V51.2C512 23 489 0 460.8 0zm-58.9 186.9c-2.6 117.8-76.8 199.7-189.4 204.8-46.1 2.6-79.4-12.8-110.1-30.7 33.3 5.1 76.8-7.7 99.8-28.2-33.3-2.6-53.8-20.5-64-48.6 10.2 2.6 20.5 0 28.2 0-30.7-10.2-51.2-28.2-53.8-69.1 7.7 5.1 17.9 7.7 28.2 7.7-23-12.8-38.4-61.4-20.5-92.2 33.3 35.8 74.2 66.6 140.8 71.7-17.9-71.7 79.4-110.1 117.8-61.4 17.9-2.6 30.7-10.2 43.5-15.4-5.1 17.9-15.4 28.2-28.2 38.4 12.8-2.6 25.6-5.1 35.8-10.2-2.5 12.7-15.3 22.9-28.1 33.2z"/>*!/*/}
                                            {/*/!*</svg>*!/*/}
                                            {/*</a>*/}
                                            {/*</div>*/}
                                            {/*</div>*/}
                                        </div>

                                    </div>
                                </div>

                                <div className="user-account-main-block">
                                    <div className="button-block">
                                        <button type="button" className={this.state.show_follow ? "active follow" : "follow"} onClick={this.showFollow}>Я слежу</button>
                                        <button type="button" className={this.state.show_follow ? "my-campaign" : "my-campaign active"} onClick={this.showMyCampaign}>Мои публикации</button>
                                        {!this.state.show_follow ?  (
                                            <a href="/" className="active">
                                                <div className="add-icon"/>
                                                <span>Добавить новую публикацию</span>
                                            </a>
                                        ) :  false}

                                    </div>

                                    <div className="user-account-main-block-container">
                                        <CSSTransitionGroup transitionName="logn-popup"
                                                            transitionEnter={true}
                                                            transitionEnterTimeout={300}
                                                            transitionLeave={true}
                                                            transitionLeaveTimeout={300}>
                                            {this.state.show_follow ?  <MyFollow/> :  <MyCampaignList/>}
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
        data: store,
        tokenData: store.user_id
    }
};

export default connect(mapStateToProps)(UserAccount);