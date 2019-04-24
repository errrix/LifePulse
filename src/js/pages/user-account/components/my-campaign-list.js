import React from "react";

import SingleCard from './../../../components/singleCard'
import {addUserCards} from "../../../actions";
import {connect} from "react-redux";

class MyCampaignList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: this.props.cards_from_store
        };

        this.getUserCard = this.getUserCard.bind(this);
    }

    getUserCard () {
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
                this.props.addUserCardAction(json.response);
                this.setState({
                    cards: json.response
                });

            })
    }

    componentDidUpdate(prevProps) {
        if(prevProps.user_id !== this.props.user_id && this.props.cards_from_store.length === 0) {
            this.getUserCard()
        }
    }

    render() {

        return (
            <div className="my-campaign active">
                <div className="card-block">
                    <ul className="card-block-list card-block-list-flex">
                        {this.state.cards ? this.state.cards.map((item) => {
                            return <li key={item._id}>
                                <SingleCard card={item}/>
                            </li>
                        }) : false
                        }
                        <li className="m--add-new">
                            <a href="/">
                                <div className="add-icon m--large"/>
                                <span>Добавить новую публикацию</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        cards_from_store: store.user_cards
    }
};

const mapDispatchToProps = dispatch => ({
    addUserCardAction: array => dispatch(addUserCards(array))
});


export default connect(mapStateToProps, mapDispatchToProps)(MyCampaignList);