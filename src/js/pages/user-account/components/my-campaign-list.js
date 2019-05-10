import React from "react";

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import SingleUserAccountCard from "../../../components/singleUserAccountCard";

import url from "../../../modules/url"

class MyCampaignList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: []
        };

        this.getUserCard = this.getUserCard.bind(this);
        this.reloadCard = this.reloadCard.bind(this);
    }

    getUserCard() {
        fetch(`${url}/api/card/user/${this.props.user_id}`, {
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
                    cards: json.response
                });

            })
    }

    reloadCard() {
        this.getUserCard();
    }

    componentDidMount() {
            this.getUserCard();
        console.log("mounted list")
    }



    render() {

        return (
            <div className="my-campaign active">
                <div className="card-block">
                    <ul className="card-block-list card-block-list-flex">
                        {this.state.cards ? this.state.cards.map((item) => {
                            return <li key={item._id}>
                                <SingleUserAccountCard card={item} reloadCard={this.reloadCard}/>
                            </li>
                        }) : false
                        }
                        <li className="m--add-new">
                            <Link to="/create-fundraiser" className="active">
                                <div className="add-icon m--large"/>
                                <span>Добавить новую публикацию</span>
                            </Link>
                        </li>
                    </ul>
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

export default connect(mapStateToProps)( MyCampaignList );