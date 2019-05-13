import React from "react";
import {Link} from 'react-router-dom';
import url from "../modules/url"

class SingleCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            card: {}
        };

        // this.getAmountCard = this.getAmountCard.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {card: nextProps.card};
    }

    render() {

        return (
            <Link className="single-card" to={{
                pathname: `/usercard/${this.state.card._id}`,
                state: {
                    id: this.state.card._id
                }
            }} >
                {this.state.card.photo_preview ? (
                    <img src={ `${url}/uploads/${this.state.card.photo_preview.filename}`} alt={this.state.card.for_whom_name}/>
                ) : false}
                <div className="text-block">
                    <h4>
                        {this.state.card.for_whom_name}
                    </h4>
                    <h6>
                        {this.state.card.text_preview}
                    </h6>

                    <div className="money-count">
                        <progress value={this.state.card.max_sum} max={this.state.card.sum}/>
                        <div className="money-how">
                            <p>
                                Собрали {Math.round(this.state.card.max_sum)}
                            </p>
                            <p>
                                из {Math.round(this.state.card.sum)}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
};

export default SingleCard;