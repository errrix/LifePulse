import React from "react";
import SingleCard from './singleCard'

class CardBlock extends React.Component {

    render() {
        const {title} = this.props;
        return (
            <div className="card-block">
                <div className="container">
                    <h2 className="h2Header h2Underline">
                        {this.props.title}
                    </h2>
                    <ul className="card-block-list">
                        <li>
                            <SingleCard></SingleCard>
                        </li>
                        <li>
                            <SingleCard></SingleCard>
                        </li>
                        <li>
                            <SingleCard></SingleCard>
                        </li>
                    </ul>

                    <div className="link-wrapper">
                        <a href="/">Посмотреть еще</a>
                    </div>

                </div>
            </div>
        )
    }
};

export default CardBlock;