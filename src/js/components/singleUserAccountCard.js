import React from "react";
import {Link} from 'react-router-dom';

class SingleUserAccountCard extends React.Component {

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
            <div className="single-card"
                //  to={{
                // pathname: `/usercard/${this.state.card._id}`,
                // state: {
                //     id: this.state.card._id
                // }
                // }}
            >
                {this.state.card.photo_preview ? (
                    <img src={ `http://165.227.11.173:3001/uploads/${this.state.card.photo_preview.filename}`} alt=""/>
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



                    {this.state.card.status === 'draft' ? (
                        <div className="btn btn-transparent">Модерация </div>
                    ) : false}

                    {this.state.card.status === 'rev' ? (
                        <Link to={{
                            pathname: `/edit-fundraiser`,
                            state: {
                                id: this.state.card._id
                            }
                        }} className="btn btn-transparent">Редактировать</Link>
                    ) : false}

                    {this.state.card.status === 'active' ? (
                        <div>
                            <div className="btn btn-transparent"> Забрать деньги </div>
                            <Link className="btn btn-transparent"
                                to={{pathname: `/usercard/${this.state.card._id}`,
                                    state: {
                                        id: this.state.card._id
                                    }}}> Просмотреть на сайте </Link>
                        </div>

                    ) : false}
                </div>
            </div>
        )
    }
};

export default SingleUserAccountCard;