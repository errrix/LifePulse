import React from "react";

import SingleCard from './../../../components/singleCard'
import {addUserCards} from "../../../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import SingleUserAccountCard from "../../../components/singleUserAccountCard";

class MyCampaignList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: []
        };

        this.getUserCard = this.getUserCard.bind(this);
    }

    getUserCard() {
        fetch(`http://165.227.11.173:3001/api/card/user/${this.props.user_id}`, {
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

    componentDidMount() {
        this.getUserCard()
    }

    render() {

        return (
            <div className="my-campaign active">
                <div className="card-block">
                    <ul className="card-block-list card-block-list-flex">
                        {this.state.cards ? this.state.cards.map((item) => {
                            return <li key={item._id}>
                                <SingleUserAccountCard card={item}/>
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

export default MyCampaignList;