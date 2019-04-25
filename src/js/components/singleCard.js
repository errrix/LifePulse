import React from "react";
import {Link} from 'react-router-dom';

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
                    <img src={ `http://165.227.11.173:3001/${this.state.card.photo_preview.sizes[0].path}`} alt=""/>
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
                                Собрали {this.state.card.max_sum}
                            </p>
                            <p>
                                из {this.state.card.sum}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
};

export default SingleCard;