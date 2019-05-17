import React from "react";

import SingleCard from './../../../components/singleCard'
import url from "../../../modules/url";
import {connect} from "react-redux";
import SingleUserAccountCard from "./my-campaign-list";
import Loader from "../../../components/loader";

class MyFollow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            loaded: false
        };

        this.getDonateCard = this.getDonateCard.bind(this);
    }

    getDonateCard() {
        fetch(`${url}/api/card/donate/${this.props.user_id}/short`, {
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
                    cards: json.response,
                    loaded: true
                });
            })
    }

    componentDidMount() {
        this.getDonateCard();
    }

    render() {
        return (
            <div className="follow active">
                <div className="card-block">

                    {this.state.loaded ? (
                        this.state.cards.length > 0 ?
                            (<ul className="card-block-list card-block-list-flex">
                                {this.state.cards.map((item, index) => {
                                    return <li key={index}>
                                        <SingleCard card={item.card}/>
                                        <div className="your-donate">Вы пожертвовали: {item.sum} грн</div>
                                    </li>
                                })}
                            </ul>) : (<div className="no-follow-donate">
                            <p className="h4Header">
                                Тут пока нет карточек, помогите кому-либо или оставьте комментарий под заявкой и мы покажем
                                эти карточки здесь
                            </p>
                            </div>)
                    ) : (
                        <Loader/>
                    )}


                    {/*<div className="button-wrapper">*/}
                    {/*<button type="submit" className="btn m--with-loader">*/}
                    {/*<span>Посмотреть еще</span>*/}
                    {/*<span className="loader"/>*/}
                    {/*</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        user_id: store.user_id
    }
};


export default connect(mapStateToProps)(MyFollow);