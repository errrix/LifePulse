import React from "react";
import Subscribeblock from "../components/subscribeBlock";
import {Link} from "react-router-dom";
import SingleCard from "../components/singleCard";

class successStories extends React.Component {

    componentDidMount(){
        document.title = "LifesPulse | Успешные сборы"
    }

    render() {
        return (
            <div>
                <div className="success-stories-block">
                    <div className="container">
                        <div className="card-block container">
                            <ul className="card-block-list card-block-list-flex">
                                {/*{this.state.cards ? this.state.cards.map((item) => {*/}
                                    {/*return <li key={item._id}>*/}
                                        {/*<SingleCard card={item}/>*/}
                                    {/*</li>*/}
                                {/*}) : false*/}
                                {/*}*/}
                            </ul>
                            <div className="link-wrapper">
                                <button className="link-bottom-hover" onClick={this.handleLoadMore}>Посмотреть еще</button>
                            </div>

                        </div>
                    </div>
                </div>
                <Subscribeblock/>
            </div>

        )
    }
};


export default successStories;